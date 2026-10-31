import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/ju14robju.css';
import '../../css/r/rfwecnb1c.css';
import '../../css/j/j3w8rgb8j.css';
import '../../css/d/d96ks8v-f.css';
import '../../css/a/anobn0-ah.css';
import '../../css/v/v3zt-2qas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ju14robju wm-shadow"/><path class="rfwecnb1c wm-shadow"/><path class="j3w8rgb8j"/><path class="d96ks8v-f"/><path class="anobn0-ah"/><path class="v3zt-2qas"/></g>`,
		"fallback": "withicons-brutal:cube",
	});
}

export default Component;
