import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcbljub4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcbljub4e"/>`,
		"fallback": "coolicons:git-merge-fill-round",
	});
}

export default Component;
