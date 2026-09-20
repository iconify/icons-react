import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jd3_-d4_j.css';
import '../../css/m/m4q1s3bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jd3_-d4_j"/><path class="m4q1s3bjn"/></g>`,
		"fallback": "keyline-icons:droplet-off-two-tone",
	});
}

export default Component;
