import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbopo_bbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbopo_bbq"/>`,
		"fallback": "game-icons:flat-paw-print",
	});
}

export default Component;
