import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucsmcqbrq.css';
import '../../css/f/f1ouj-bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucsmcqbrq"/><path class="f1ouj-bgy"/>`,
		"fallback": "ix:document-ai-filled",
	});
}

export default Component;
