import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsf_s69ln.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsf_s69ln"/>`,
		"fallback": "fa7-brands:gg-circle",
	});
}

export default Component;
