import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw6_m-bts.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw6_m-bts"/>`,
		"fallback": "streamline:insert-side",
	});
}

export default Component;
