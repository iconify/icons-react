import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3ga9tbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3ga9tbmh"/>`,
		"fallback": "keyline-icons:bed-single-sharp",
	});
}

export default Component;
