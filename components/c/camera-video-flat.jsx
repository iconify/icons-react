import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8s1o-bte.css';
import '../../css/q/qsq0s7b5a.css';
import '../../css/t/trk254b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8s1o-bte"/><path class="qsq0s7b5a"/><path clip-rule="evenodd" class="trk254b6s"/></g>`,
		"fallback": "streamline-sharp-color:camera-video-flat",
	});
}

export default Component;
