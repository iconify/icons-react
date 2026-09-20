import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yt85edb5v.css';
import '../../css/y/yw_3-_e3x.css';
import '../../css/x/xp8t89bzn.css';
import '../../css/x/xim4w7bzh.css';
import '../../css/p/pw50wubck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yt85edb5v"/><path class="yw_3-_e3x"/><path class="xp8t89bzn"/><path class="xim4w7bzh"/><path class="pw50wubck"/></g>`,
		"fallback": "streamline-ultimate:american-football-helmet",
	});
}

export default Component;
