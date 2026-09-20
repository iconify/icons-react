import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc1e-pe_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zc1e-pe_t"/>`,
		"fallback": "mingcute:color-picker-fill",
	});
}

export default Component;
