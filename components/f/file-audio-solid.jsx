import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djseinb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djseinb-o"/>`,
		"fallback": "iconaut:file-audio-solid",
	});
}

export default Component;
