import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdp7gyb5x.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdp7gyb5x"/>`,
		"fallback": "f7:ant-circle-fill",
	});
}

export default Component;
