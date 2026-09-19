import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp5xrybib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zp5xrybib"/>`,
		"fallback": "gravity-ui:gear",
	});
}

export default Component;
