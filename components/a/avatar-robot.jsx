import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/ddielfb1j.css';
import '../../css/r/rabcxwu2x.css';
import '../../css/s/sgtm4z6mn.css';
import '../../css/r/roj8vlbow.css';
import '../../css/p/ppfni7btu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ddielfb1j wm-k"/><path class="rabcxwu2x wm-a"/><path class="sgtm4z6mn wm-k"/><path class="roj8vlbow"/><path class="ppfni7btu"/></g>`,
		"fallback": "withicons-bauhaus:avatar-robot",
	});
}

export default Component;
