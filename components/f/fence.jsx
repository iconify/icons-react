import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vus2dnwrc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vus2dnwrc"/>`,
		"fallback": "picon:fence",
	});
}

export default Component;
