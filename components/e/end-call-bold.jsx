import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9_2j3bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9_2j3bug"/>`,
		"fallback": "solar:end-call-bold",
	});
}

export default Component;
