import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esb7-8xxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esb7-8xxk"/>`,
		"fallback": "ri:file-scan-line",
	});
}

export default Component;
