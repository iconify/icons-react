import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlkp8bqjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlkp8bqjn"/>`,
		"fallback": "ri:file-shred-line",
	});
}

export default Component;
