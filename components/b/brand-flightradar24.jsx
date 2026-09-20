import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/o/o1z2wccdo.css';
import '../../css/j/jc0mmvb4z.css';
import '../../css/l/ld24yvbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="o1z2wccdo"/><path class="jc0mmvb4z"/><path class="ld24yvbps"/></g>`,
		"fallback": "tabler:brand-flightradar24",
	});
}

export default Component;
