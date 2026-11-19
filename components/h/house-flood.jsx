import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izf-ribdx.css';
import '../../css/w/wvlva5b8f.css';
import '../../css/w/wcxzqmhcl.css';
import '../../css/v/vi2m5ubzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="izf-ribdx"/><path class="wvlva5b8f"/><path class="wcxzqmhcl"/><path class="vi2m5ubzl"/></g>`,
		"fallback": "andrsrxn:house-flood",
	});
}

export default Component;
