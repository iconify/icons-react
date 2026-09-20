import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e709i7b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e709i7b-v"/>`,
		"fallback": "streamline-ultimate:diagram-arrow-down-1",
	});
}

export default Component;
