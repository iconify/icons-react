import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m82ulsb7p.css';
import '../../css/q/q_8nafb3u.css';
import '../../css/u/ufkv7lbjl.css';
import '../../css/c/cwaouvdkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m82ulsb7p"/><path class="q_8nafb3u"/><path class="ufkv7lbjl"/><path class="cwaouvdkd"/></g>`,
		"fallback": "iconoir:horiz-distribution-left-solid",
	});
}

export default Component;
