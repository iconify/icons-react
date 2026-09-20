import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkqjscc3u.css';
import '../../css/y/y_hg53bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dkqjscc3u"/><path class="y_hg53bmf"/></g>`,
		"fallback": "si:briefcase-detailed-duotone",
	});
}

export default Component;
