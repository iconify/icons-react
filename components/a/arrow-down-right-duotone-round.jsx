import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_6x5wbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_6x5wbwr"/>`,
		"fallback": "coolicons:arrow-down-right-duotone-round",
	});
}

export default Component;
