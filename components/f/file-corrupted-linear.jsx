import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/li3goib3q.css';
import '../../css/b/b4q3fubjb.css';
import '../../css/e/e0cmz0boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="li3goib3q"/><path class="b4q3fubjb"/><path class="e0cmz0boh"/></g>`,
		"fallback": "solar:file-corrupted-linear",
	});
}

export default Component;
