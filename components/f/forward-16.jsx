import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws3c52ixo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws3c52ixo"/>`,
		"fallback": "qlementine-icons:forward-16",
	});
}

export default Component;
