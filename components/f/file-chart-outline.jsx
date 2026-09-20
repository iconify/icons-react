import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z59vie_hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z59vie_hv"/>`,
		"fallback": "mdi:file-chart-outline",
	});
}

export default Component;
