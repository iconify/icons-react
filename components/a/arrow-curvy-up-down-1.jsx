import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5996na3l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5996na3l"/>`,
		"fallback": "streamline:arrow-curvy-up-down-1",
	});
}

export default Component;
