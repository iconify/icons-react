import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn3bqef3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn3bqef3v"/>`,
		"fallback": "coolicons:folder-download-corner-round",
	});
}

export default Component;
