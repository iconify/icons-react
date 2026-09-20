import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4mq2le0j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4mq2le0j"/>`,
		"fallback": "streamline-block:content-share",
	});
}

export default Component;
