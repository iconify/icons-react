import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/u_osh_p5x.css';
import '../../css/p/pm27xrbad.css';
import '../../css/r/r0cxtj73q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="u_osh_p5x"/><circle class="pm27xrbad"/><path class="r0cxtj73q"/></g>`,
		"fallback": "lets-icons:folder-search",
	});
}

export default Component;
