import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjfa6f3hs.css';
import '../../css/z/z_r9jpb7p.css';
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
		"content": `<g class="jx0p4fbya"><path class="rjfa6f3hs"/><path class="z_r9jpb7p"/><path class="a3scpvo1f"/><path class="eck4ylbag"/></g>`,
		"fallback": "solar:hand-pills-linear",
	});
}

export default Component;
