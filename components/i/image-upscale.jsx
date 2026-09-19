import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-cf0tyaw.css';
import '../../css/n/nwun370oi.css';
import '../../css/g/gk6535bxo.css';
import '../../css/a/aw0dy7lpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n-cf0tyaw"/><path class="nwun370oi"/><path class="gk6535bxo"/><path class="aw0dy7lpn"/></g>`,
		"fallback": "hugeicons:image-upscale",
	});
}

export default Component;
