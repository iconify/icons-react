import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p3rrodb9i.css';
import '../../css/k/kszlepbvc.css';
import '../../css/h/hvq22mbdj.css';
import '../../css/d/dzfvxdqkh.css';
import '../../css/i/iw-6j_5nd.css';
import '../../css/p/phhqx_jbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="p3rrodb9i wm-shadow"/><path class="kszlepbvc"/><path class="hvq22mbdj"/><path class="dzfvxdqkh"/><path class="iw-6j_5nd"/><path class="phhqx_jbi"/></g>`,
		"fallback": "withicons-retro:avatar-monster-fluffy",
	});
}

export default Component;
