import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrhr15z4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrhr15z4d"/>`,
		"fallback": "boxicons:file-report-filled",
	});
}

export default Component;
