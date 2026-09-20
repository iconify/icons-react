import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw7q4hb_e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw7q4hb_e"/>`,
		"fallback": "picon:curling",
	});
}

export default Component;
