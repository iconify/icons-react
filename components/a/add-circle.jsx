import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpdfpcc7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpdfpcc7l"/>`,
		"fallback": "ion:add-circle",
	});
}

export default Component;
