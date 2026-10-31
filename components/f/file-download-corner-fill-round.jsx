import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfv86kbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfv86kbok"/>`,
		"fallback": "coolicons:file-download-corner-fill-round",
	});
}

export default Component;
