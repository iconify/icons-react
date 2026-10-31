import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yndr5_bwa.css';
import '../../css/s/ssmnx9b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yndr5_bwa"/><path class="ssmnx9b-z"/></g>`,
		"fallback": "coolicons:dog-duotone-round",
	});
}

export default Component;
