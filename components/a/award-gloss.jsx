import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hk2kttb5p.css';
import '../../css/n/nbv-gj5kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hk2kttb5p wm-k"/><path class="nbv-gj5kt wm-a"/></g>`,
		"fallback": "withicons:award-gloss",
	});
}

export default Component;
