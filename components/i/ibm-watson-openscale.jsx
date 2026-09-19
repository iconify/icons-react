import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzh6_5bci.css';
import '../../css/t/t987snbfx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzh6_5bci"/><path class="t987snbfx"/>`,
		"fallback": "carbon:ibm-watson-openscale",
	});
}

export default Component;
