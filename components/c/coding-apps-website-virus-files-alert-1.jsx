import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/ts7_i983q.css';
import '../../css/t/tqmktlbva.css';
import '../../css/f/f-ckj9y-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ts7_i983q"/><path class="tqmktlbva"/><path class="f-ckj9y-r"/></g>`,
		"fallback": "streamline-ultimate:coding-apps-website-virus-files-alert-1",
	});
}

export default Component;
