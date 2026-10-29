import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxql_cb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxql_cb5r"/>`,
		"fallback": "withicons:audio-waveform",
	});
}

export default Component;
