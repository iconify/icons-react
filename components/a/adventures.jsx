import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp1g0i7no.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp1g0i7no"/>`,
		"fallback": "icons8:adventures",
	});
}

export default Component;
