import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/egh_kh2ze.css';
import '../../css/q/qysct-28c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="egh_kh2ze"/><path class="qysct-28c"/></g>`,
		"fallback": "hugeicons:infinity-02",
	});
}

export default Component;
