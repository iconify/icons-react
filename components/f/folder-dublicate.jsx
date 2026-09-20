import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oaomjongb.css';
import '../../css/q/qfzzwtv0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oaomjongb"/><path class="qfzzwtv0j"/></g>`,
		"fallback": "lets-icons:folder-dublicate",
	});
}

export default Component;
