import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_toq0bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_toq0bkr"/>`,
		"fallback": "keyline-icons:expand-dashed-up-right-sharp",
	});
}

export default Component;
