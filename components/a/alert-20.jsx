import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9be31f5n.css';
import '../../css/c/c3ova_6sf.css';
import '../../css/h/h3rixiekm.css';
import '../../css/a/a7cb7nrdi.css';
import '../../css/y/yqjeyqbus.css';
import '../../css/g/gk8gx7whk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGWhRYwdqV)" class="u9be31f5n"/><path fill="url(#SVGuUHCFapn)" class="c3ova_6sf"/><defs><linearGradient id="SVGWhRYwdqV" x1="10.01" x2="10.01" y1="14.5" y2="18" gradientUnits="userSpaceOnUse"><stop class="h3rixiekm"/><stop offset="1" class="a7cb7nrdi"/></linearGradient><linearGradient id="SVGuUHCFapn" x1="17.01" x2="4.51" y1="15" y2="4" gradientUnits="userSpaceOnUse"><stop class="yqjeyqbus"/><stop offset="1" class="gk8gx7whk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:alert-20",
	});
}

export default Component;
