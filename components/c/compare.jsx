import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dum2n6gev.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dum2n6gev"/>`,
		"fallback": "codicon:compare",
	});
}

export default Component;
