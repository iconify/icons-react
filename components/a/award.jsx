import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lroqjacda.css';
import '../../css/s/sogrjjsbu.css';
import '../../css/f/f8zr51bbs.css';
import '../../css/z/z2q2l93ud.css';
import '../../css/w/wa3daqb8v.css';
import '../../css/b/bp9l7n85m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lroqjacda wm-shadow"/><path class="sogrjjsbu"/><path class="f8zr51bbs"/><path class="z2q2l93ud"/><path class="wa3daqb8v"/><path class="bp9l7n85m"/></g>`,
		"fallback": "withicons-retro:award",
	});
}

export default Component;
