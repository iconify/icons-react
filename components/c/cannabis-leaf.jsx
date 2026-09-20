import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py7ktqbvf.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-y9rjbjr.css';
import '../../css/p/pd35oyb3g.css';
import '../../css/e/ele2febsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGNj8XZdDN" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="py7ktqbvf"/></mask><g mask="url(#SVGNj8XZdDN)" class="ft5dv1b6b"><path class="j-y9rjbjr"/><path class="pd35oyb3g"/><path class="ele2febsg"/></g>`,
		"fallback": "streamline-cyber-color:cannabis-leaf",
	});
}

export default Component;
