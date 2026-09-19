import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzaaapbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzaaapbwk"/>`,
		"fallback": "bxl:html5",
	});
}

export default Component;
