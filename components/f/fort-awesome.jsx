import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af301caya.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af301caya"/>`,
		"fallback": "fa7-brands:fort-awesome",
	});
}

export default Component;
