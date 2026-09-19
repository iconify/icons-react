import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvy7q9nnj.css';
import '../../css/f/f86xz6sdl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvy7q9nnj"/><path class="f86xz6sdl"/>`,
		"fallback": "carbon:ibm-cloud-pak-multicloud-mgmt",
	});
}

export default Component;
