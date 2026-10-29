import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv7kf4u0i.css';
import '../../css/j/j79w86gjb.css';
import '../../css/i/i2oj4_bht.css';
import '../../css/d/dtjo7_p7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sv7kf4u0i wm-a"/><path class="j79w86gjb wm-a"/><path class="i2oj4_bht wm-a"/><path class="dtjo7_p7q wm-shine"/></g>`,
		"fallback": "withicons-anime:audio-lines",
	});
}

export default Component;
