import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq6c9gc0r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq6c9gc0r"/>`,
		"fallback": "picon:height",
	});
}

export default Component;
