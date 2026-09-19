import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6wondblj.css';
import '../../css/f/f86xz6sdl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6wondblj"/><path class="f86xz6sdl"/>`,
		"fallback": "carbon:ibm-cloud-pak-security",
	});
}

export default Component;
