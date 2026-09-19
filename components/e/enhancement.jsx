import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euzb8f43c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euzb8f43c"/>`,
		"fallback": "eos-icons:enhancement",
	});
}

export default Component;
