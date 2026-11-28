import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0ow95o1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0ow95o1s"/>`,
		"fallback": "noviair:file-audio-check",
	});
}

export default Component;
