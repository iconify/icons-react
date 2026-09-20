import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy3r6pbtu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy3r6pbtu"/>`,
		"fallback": "pinhead:gull",
	});
}

export default Component;
