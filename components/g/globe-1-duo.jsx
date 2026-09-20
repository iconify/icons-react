import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piqghlb6x.css';
import '../../css/w/wtp84cezl.css';
import '../../css/a/atvptvb5q.css';
import '../../css/d/ddx1-lb6v.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="piqghlb6x"><path class="wtp84cezl"/><path class="atvptvb5q"/><path class="ddx1-lb6v"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`,
		"fallback": "streamline-stickies-color:globe-1-duo",
	});
}

export default Component;
