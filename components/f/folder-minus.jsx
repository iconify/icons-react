import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/q/qtql_xblt.css';
import '../../css/c/csj-am6vj.css';
import '../../css/x/xyc17sb9x.css';
import '../../css/e/eg979na8x.css';
import '../../css/m/mo9-n4b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="qtql_xblt"/><path class="csj-am6vj"/><path class="xyc17sb9x"/><path class="eg979na8x"/><path class="mo9-n4b6l"/></g>`,
		"fallback": "withicons-retro:folder-minus",
	});
}

export default Component;
