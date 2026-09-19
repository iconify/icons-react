import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp-6wrbmb.css';

const viewBox = {"width":288,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp-6wrbmb"/>`,
		"fallback": "fa-solid:genderless",
	});
}

export default Component;
