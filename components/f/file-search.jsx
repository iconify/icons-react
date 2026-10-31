import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw777i2dc.css';
import '../../css/p/ppp_-jb5h.css';
import '../../css/d/dos_avbnx.css';
import '../../css/k/k64lvxbqt.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jw777i2dc wm-k"/><path class="ppp_-jb5h wm-shine"/><path class="dos_avbnx wm-shine"/><path class="k64lvxbqt wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-search",
	});
}

export default Component;
