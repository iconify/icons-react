import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnbvk1bmo.css';
import '../../css/a/aj6ehdcvp.css';
import '../../css/o/o0crath5f.css';
import '../../css/a/aqpre-vwq.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGukhtfcDr"><g class="ft5dv1b6b"><path class="rnbvk1bmo"/><path class="aj6ehdcvp"/><circle transform="matrix(0 -1 -1 0 17 20)" class="o0crath5f"/><circle transform="matrix(0 -1 -1 0 17 20)" class="aqpre-vwq"/></g></mask></defs><path mask="url(#SVGukhtfcDr)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:download-circle-duotone-line",
	});
}

export default Component;
