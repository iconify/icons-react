import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms959bmcp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms959bmcp"/>`,
		"fallback": "fa7-solid:file-contract",
	});
}

export default Component;
