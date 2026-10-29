import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jrn23ccbu.css';
import '../../css/o/ozbrujcbd.css';
import '../../css/r/rsai_abhp.css';
import '../../css/w/w62x13bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jrn23ccbu"/><path class="ozbrujcbd wm-a"/><path class="rsai_abhp wm-a"/><path class="w62x13bmw"/></g>`,
		"fallback": "withicons:airplay-duo",
	});
}

export default Component;
