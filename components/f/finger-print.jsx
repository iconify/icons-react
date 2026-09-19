import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_ekx3b5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_ekx3b5i"/>`,
		"fallback": "game-icons:finger-print",
	});
}

export default Component;
