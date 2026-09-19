import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s3uhn8bcc.css';
import '../../css/i/ih8n30w6j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="s3uhn8bcc"/><path class="ih8n30w6j"/></g>`,
		"fallback": "cryptocurrency-color:cob",
	});
}

export default Component;
