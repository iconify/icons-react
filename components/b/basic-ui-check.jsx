import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f97xkqb-s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f97xkqb-s"/>`,
		"fallback": "streamline-block:basic-ui-check",
	});
}

export default Component;
