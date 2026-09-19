import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inhl6dddo.css';
import '../../css/w/wnk0ssb-x.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/c/c8pavbbjd.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y8pwr279m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG1sx23czc)" class="inhl6dddo"/><path fill="url(#SVGMeoSkk9s)" class="wnk0ssb-x"/><defs><linearGradient id="SVG1sx23czc" x1="2.429" x2="10.71" y1="4.25" y2="12.854" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="c8pavbbjd"/></linearGradient><linearGradient id="SVGMeoSkk9s" x1="6.154" x2="8.802" y1="6.346" y2="14.902" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="y8pwr279m"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:checkbox-16",
	});
}

export default Component;
