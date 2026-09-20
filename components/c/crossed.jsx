import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a35c9ac7a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a35c9ac7a"/>`,
		"fallback": "picon:crossed",
	});
}

export default Component;
