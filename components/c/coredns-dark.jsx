import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yco3q7bmf.css';
import '../../css/v/vqu68vnqt.css';

const viewBox = {"width":361.4,"height":322.9,"left":-1.2,"top":19.05};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yco3q7bmf"/><path class="vqu68vnqt"/>`,
		"fallback": "thesvg-color:coredns-dark",
	});
}

export default Component;
