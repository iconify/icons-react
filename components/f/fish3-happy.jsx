import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g64lcdcrd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g64lcdcrd"/>`,
		"fallback": "codicon:fish3-happy",
	});
}

export default Component;
