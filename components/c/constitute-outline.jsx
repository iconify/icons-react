import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi53r86ip.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi53r86ip"/>`,
		"fallback": "lsicon:constitute-outline",
	});
}

export default Component;
