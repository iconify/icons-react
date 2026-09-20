import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6odmw4gv.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6odmw4gv"/>`,
		"fallback": "lineicons:agenda",
	});
}

export default Component;
