import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzmcw3ump.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzmcw3ump"/>`,
		"fallback": "hugeicons:computer-ethernet",
	});
}

export default Component;
