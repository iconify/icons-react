import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arf40vqct.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arf40vqct"/>`,
		"fallback": "carbon:content-navigator-sync-paused",
	});
}

export default Component;
