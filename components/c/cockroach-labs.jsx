import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlfsqwb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlfsqwb8e"/>`,
		"fallback": "thesvg-color:cockroach-labs",
	});
}

export default Component;
