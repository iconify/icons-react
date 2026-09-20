import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlf2raced.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlf2raced"/>`,
		"fallback": "streamline-flex:hierarchy-2",
	});
}

export default Component;
