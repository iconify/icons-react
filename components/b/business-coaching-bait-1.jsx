import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbvxj9bay.css';
import '../../css/k/kstpsghfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fbvxj9bay"/><path class="kstpsghfs"/></g>`,
		"fallback": "streamline-freehand-color:business-coaching-bait-1",
	});
}

export default Component;
