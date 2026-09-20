import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u12cutb2e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u12cutb2e"/>`,
		"fallback": "pinhead:dog-wearing-collar",
	});
}

export default Component;
