import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fllm-o0kg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fllm-o0kg"/>`,
		"fallback": "f7:exclamationmark-shield-fill",
	});
}

export default Component;
