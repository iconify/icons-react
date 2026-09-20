import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1nk1ccxq.css';
import '../../css/u/u_gt56b5j.css';
import '../../css/i/iiskqebcm.css';
import '../../css/n/nv0-e7t8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1nk1ccxq"/><path class="u_gt56b5j"/><path class="iiskqebcm"/><path class="nv0-e7t8v"/>`,
		"fallback": "selfhst:google-play",
	});
}

export default Component;
