import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd0sbwb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd0sbwb6c"/>`,
		"fallback": "coolicons:file-download-corner-round",
	});
}

export default Component;
