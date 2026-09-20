import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kwl_occ4w.css';
import '../../css/c/cdetnwb_d.css';
import '../../css/u/ue4n8bcdh.css';
import '../../css/f/f1tt2ty1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kwl_occ4w"/><path class="cdetnwb_d"/><path class="ue4n8bcdh"/><path class="f1tt2ty1p"/></g>`,
		"fallback": "streamline-color:bug-virus-folder",
	});
}

export default Component;
