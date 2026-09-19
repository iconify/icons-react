import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp8f-vbcn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zp8f-vbcn"/>`,
		"fallback": "gravity-ui:code-merge",
	});
}

export default Component;
