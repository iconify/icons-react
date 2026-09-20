import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm4accbhq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pm4accbhq"/>`,
		"fallback": "streamline-block:devices-cpu",
	});
}

export default Component;
