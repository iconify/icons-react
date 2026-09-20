import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxd2nobky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxd2nobky"/>`,
		"fallback": "keyline-icons:circle-chevron-left-sharp-fill",
	});
}

export default Component;
