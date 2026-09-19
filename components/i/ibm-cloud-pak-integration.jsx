import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqfy9bbax.css';
import '../../css/m/mol3e-blu.css';
import '../../css/f/f86xz6sdl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqfy9bbax"/><path class="mol3e-blu"/><path class="f86xz6sdl"/>`,
		"fallback": "carbon:ibm-cloud-pak-integration",
	});
}

export default Component;
