import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwp-agrjk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwp-agrjk"/>`,
		"fallback": "fa7-brands:hugging-face",
	});
}

export default Component;
