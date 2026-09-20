import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh9_25k9p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yh9_25k9p"/>`,
		"fallback": "streamline:arrow-curvy-up-down-1-solid",
	});
}

export default Component;
