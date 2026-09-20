import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o37hg4b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o37hg4b8a"/>`,
		"fallback": "lineicons:gemini",
	});
}

export default Component;
