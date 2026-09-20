import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j724_zblf.css';
import '../../css/o/osytbzbjy.css';
import '../../css/r/rycy52bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j724_zblf"/><path class="osytbzbjy"/><path class="rycy52bgk"/></g>`,
		"fallback": "lets-icons:arhive-load-duotone",
	});
}

export default Component;
