import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjjf15bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjjf15bam"/>`,
		"fallback": "token:gyen",
	});
}

export default Component;
