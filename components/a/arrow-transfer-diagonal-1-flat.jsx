import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zln7jfbog.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zln7jfbog"/>`,
		"fallback": "streamline-color:arrow-transfer-diagonal-1-flat",
	});
}

export default Component;
