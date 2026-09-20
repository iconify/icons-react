import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og-vwh8xj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="og-vwh8xj"/>`,
		"fallback": "streamline:input-box-solid",
	});
}

export default Component;
