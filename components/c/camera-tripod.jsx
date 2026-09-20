import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl-4wd_go.css';
import '../../css/m/mnt88sbtp.css';
import '../../css/l/lbjrzdqcz.css';
import '../../css/u/ua_ix6vpn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gl-4wd_go"/><path class="mnt88sbtp"/><path class="lbjrzdqcz"/><path class="ua_ix6vpn"/></g>`,
		"fallback": "streamline-flex-color:camera-tripod",
	});
}

export default Component;
