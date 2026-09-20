import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd7j5cbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd7j5cbez"/>`,
		"fallback": "uit:arrow-up-left",
	});
}

export default Component;
