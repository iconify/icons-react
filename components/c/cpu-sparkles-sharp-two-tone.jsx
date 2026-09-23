import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m66emgbjh.css';
import '../../css/k/ksu4hvb6k.css';
import '../../css/f/ff9zbvbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m66emgbjh"/><path class="ksu4hvb6k"/><path class="ff9zbvbzx"/></g>`,
		"fallback": "keyline-icons:cpu-sparkles-sharp-two-tone",
	});
}

export default Component;
