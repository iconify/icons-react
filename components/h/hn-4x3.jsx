import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn2-adc_p.css';
import '../../css/v/v18c9fbau.css';
import '../../css/g/gvmjgib3r.css';
import '../../css/h/hk7cbacly.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn2-adc_p"/><path class="v18c9fbau"/><g id="SVGrfCGTdqe" transform="translate(320 240)scale(26.66665)" class="gvmjgib3r"><g id="SVGfIJcykji"><path id="SVG2a0yydSY" class="hk7cbacly"/><use width="100%" height="100%" href="#SVG2a0yydSY" transform="scale(-1 1)"/></g><use width="100%" height="100%" href="#SVGfIJcykji" transform="rotate(72)"/><use width="100%" height="100%" href="#SVGfIJcykji" transform="rotate(-72)"/><use width="100%" height="100%" href="#SVGfIJcykji" transform="rotate(144)"/><use width="100%" height="100%" href="#SVGfIJcykji" transform="rotate(-144)"/></g><use width="100%" height="100%" href="#SVGrfCGTdqe" transform="translate(133.3 -42.7)"/><use width="100%" height="100%" href="#SVGrfCGTdqe" transform="translate(133.3 37.3)"/><use width="100%" height="100%" href="#SVGrfCGTdqe" transform="translate(-133.3 -42.7)"/><use width="100%" height="100%" href="#SVGrfCGTdqe" transform="translate(-133.3 37.3)"/>`,
		"fallback": "flag:hn-4x3",
	});
}

export default Component;
