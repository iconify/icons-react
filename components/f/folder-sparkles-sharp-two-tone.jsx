import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zr2nxeb2j.css';
import '../../css/u/urdmwybfb.css';
import '../../css/w/w79zl5b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zr2nxeb2j"/><path class="urdmwybfb"/><path class="w79zl5b-f"/></g>`,
		"fallback": "keyline-icons:folder-sparkles-sharp-two-tone",
	});
}

export default Component;
