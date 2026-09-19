import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xek9-rddj.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xek9-rddj"/>`,
		"fallback": "topcoat:collapse",
	});
}

export default Component;
