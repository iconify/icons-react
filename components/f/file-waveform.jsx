import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt9lf65_o.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt9lf65_o"/>`,
		"fallback": "fa6-solid:file-waveform",
	});
}

export default Component;
