import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngppwkb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngppwkb3s"/>`,
		"fallback": "noviair-light:file-audio-plus",
	});
}

export default Component;
