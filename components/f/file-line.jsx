import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uurlk9r4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uurlk9r4l"/>`,
		"fallback": "majesticons:file-line",
	});
}

export default Component;
