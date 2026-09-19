import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcy2s53wi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcy2s53wi"/>`,
		"fallback": "f7:chevron-compact-down",
	});
}

export default Component;
