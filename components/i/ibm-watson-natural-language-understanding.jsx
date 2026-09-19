import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu-ss8biv.css';
import '../../css/z/zg21q53ns.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu-ss8biv"/><path class="zg21q53ns"/>`,
		"fallback": "carbon:ibm-watson-natural-language-understanding",
	});
}

export default Component;
