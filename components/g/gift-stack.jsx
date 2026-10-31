import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ef0i2acpf.css';
import '../../css/a/awkz_8bgb.css';
import '../../css/d/dz95bzbua.css';
import '../../css/h/haj1e3bkt.css';
import '../../css/n/nfpe-8bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ef0i2acpf wm-shadow"/><path class="awkz_8bgb"/><path class="dz95bzbua"/><path class="haj1e3bkt"/><path class="nfpe-8bcc"/></g>`,
		"fallback": "withicons-retro:gift-stack",
	});
}

export default Component;
