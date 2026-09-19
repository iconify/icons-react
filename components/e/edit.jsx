import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhwsd0bam.css';

const viewBox = {"width":758,"height":666};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhwsd0bam"/>`,
		"fallback": "ls:edit",
	});
}

export default Component;
