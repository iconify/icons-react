import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjauwcc2z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjauwcc2z"/>`,
		"fallback": "streamline:composition-vertical-remix",
	});
}

export default Component;
