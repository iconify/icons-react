import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etel5odht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etel5odht"/>`,
		"fallback": "coolicons:battery-low-round",
	});
}

export default Component;
