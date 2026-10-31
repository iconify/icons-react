import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3mdcff1x.css';
import '../../css/p/poax4ybgm.css';
import '../../css/m/m2m306b_n.css';

const viewBox = {"width":301,"height":261};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s3mdcff1x"/><path class="poax4ybgm"/><path class="m2m306b_n"/></g>`,
		"fallback": "cif:be",
	});
}

export default Component;
