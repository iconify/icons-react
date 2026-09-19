import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syay5usio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syay5usio"/>`,
		"fallback": "eos-icons:ai-operator",
	});
}

export default Component;
