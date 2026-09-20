import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eunagkbmk.css';
import '../../css/s/sif4kab2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eunagkbmk"/><path class="sif4kab2r"/></g>`,
		"fallback": "reicon:cloud-lightning-filled",
	});
}

export default Component;
