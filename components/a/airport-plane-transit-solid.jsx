import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz58s7yxh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xz58s7yxh"/>`,
		"fallback": "streamline:airport-plane-transit-solid",
	});
}

export default Component;
