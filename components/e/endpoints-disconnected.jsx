import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyt-q6bwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyt-q6bwr"/>`,
		"fallback": "eos-icons:endpoints-disconnected",
	});
}

export default Component;
