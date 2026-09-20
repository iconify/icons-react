import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en8xd5bmv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en8xd5bmv"/>`,
		"fallback": "streamline-flex:ai-scanner-robot",
	});
}

export default Component;
