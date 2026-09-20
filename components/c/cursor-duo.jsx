import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piqghlb6x.css';
import '../../css/j/jaxfqsbsv.css';
import '../../css/x/xl69vcc1h.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="piqghlb6x"><path class="jaxfqsbsv"/><path class="xl69vcc1h"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`,
		"fallback": "streamline-stickies-color:cursor-duo",
	});
}

export default Component;
