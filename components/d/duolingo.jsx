import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjum-4nsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjum-4nsl"/>`,
		"fallback": "thesvg-color:duolingo",
	});
}

export default Component;
