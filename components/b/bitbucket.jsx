import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlemfdc9g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlemfdc9g"/>`,
		"fallback": "la:bitbucket",
	});
}

export default Component;
