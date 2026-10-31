import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s9agb-v7b.css';
import '../../css/e/eq_docb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s9agb-v7b"/><path class="eq_docb9q"/></g>`,
		"fallback": "withicons-retro:audio-waveform",
	});
}

export default Component;
