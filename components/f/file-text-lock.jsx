import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw3neacco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw3neacco"/>`,
		"fallback": "noviair:file-text-lock",
	});
}

export default Component;
