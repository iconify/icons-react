import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkyb-daam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkyb-daam"/>`,
		"fallback": "keyline-icons:expand-dashed-up-right-box-fill",
	});
}

export default Component;
