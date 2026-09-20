import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i50evh99z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i50evh99z"/>`,
		"fallback": "mdi:file-settings-outline",
	});
}

export default Component;
