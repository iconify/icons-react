import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lew2wbclk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lew2wbclk"/>`,
		"fallback": "cib:ethereum",
	});
}

export default Component;
