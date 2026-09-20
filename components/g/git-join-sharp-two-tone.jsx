import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z4d_mjlxu.css';
import '../../css/x/xqdu5evlh.css';
import '../../css/h/hfkigjbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="z4d_mjlxu"/><path class="xqdu5evlh"/><path class="hfkigjbqm"/></g>`,
		"fallback": "keyline-icons:git-join-sharp-two-tone",
	});
}

export default Component;
