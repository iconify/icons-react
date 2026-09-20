import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/d/dlecmdade.css';
import '../../css/s/s0_05_nra.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vbicd5bap.css';
import '../../css/l/lrrjn_18d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGXRDnBcnk" width="16" height="20" x="4" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="dlecmdade"/><path class="s0_05_nra"/></mask><g class="h01tyzbfu"><path mask="url(#SVGXRDnBcnk)" class="vbicd5bap"/><path class="lrrjn_18d"/></g>`,
		"fallback": "lets-icons:humidity-light",
	});
}

export default Component;
