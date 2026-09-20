import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh94hzf6s.css';
import '../../css/z/zjiu-obdp.css';
import '../../css/m/m95htdxmw.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/g/gv6we62_u.css';
import '../../css/c/cau_5iksw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rh94hzf6s"><path class="zjiu-obdp"/><path class="m95htdxmw"/></g><g class="dcqdxh5zc"><path class="gv6we62_u"/><path class="cau_5iksw"/></g>`,
		"fallback": "openmoji:inbox-tray",
	});
}

export default Component;
