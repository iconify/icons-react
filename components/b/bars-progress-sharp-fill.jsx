import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez-140r2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez-140r2i"/>`,
		"fallback": "keyline-icons:bars-progress-sharp-fill",
	});
}

export default Component;
