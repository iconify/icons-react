import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktj_s9fwf.css';
import '../../css/l/l_k5w5_ge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktj_s9fwf"/><path id="SVGg6HuSbAj" class="l_k5w5_ge"/><use href="#SVGg6HuSbAj" transform="rotate(72 248.5 259.5)"/><use href="#SVGg6HuSbAj" transform="rotate(144 248.5 259.5)"/><use href="#SVGg6HuSbAj" transform="rotate(216 248.5 259.5)"/><use href="#SVGg6HuSbAj" transform="rotate(288 248.5 259.5)"/>`,
		"fallback": "flag:hk-1x1",
	});
}

export default Component;
