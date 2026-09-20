import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amd21_i0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amd21_i0m"/>`,
		"fallback": "keyline-icons:circle-stop-sharp",
	});
}

export default Component;
