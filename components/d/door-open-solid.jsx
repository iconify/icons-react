import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo-2b4bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo-2b4bms"/>`,
		"fallback": "withicons:door-open-solid",
	});
}

export default Component;
