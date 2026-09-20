import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f5q4o4bqu.css';
import '../../css/g/gf-esmbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="f5q4o4bqu"/><path class="gf-esmbnk"/></g>`,
		"fallback": "lets-icons:bell",
	});
}

export default Component;
