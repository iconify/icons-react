import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g7e2eab1a.css';
import '../../css/u/u-2m9hbse.css';
import '../../css/v/vmccjbb6s.css';
import '../../css/a/a3scpvo1f.css';
import '../../css/e/eck4ylbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g7e2eab1a"/><path class="u-2m9hbse"/><path class="vmccjbb6s"/><path class="a3scpvo1f"/><path class="eck4ylbag"/></g>`,
		"fallback": "solar:hand-stars-linear",
	});
}

export default Component;
