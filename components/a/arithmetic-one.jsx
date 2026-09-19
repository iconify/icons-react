import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wojiixdgs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wojiixdgs"/>`,
		"fallback": "icon-park-outline:arithmetic-one",
	});
}

export default Component;
