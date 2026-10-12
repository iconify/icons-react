import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_dv-4xcr.css';
import '../../css/h/hxy_y1dfx.css';
import '../../css/z/z_aw5vbcy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_dv-4xcr"/><path class="hxy_y1dfx"/><path class="z_aw5vbcy"/>`,
		"fallback": "energy-icons:file-lock-20",
	});
}

export default Component;
