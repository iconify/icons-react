import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpe47b1df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpe47b1df"/>`,
		"fallback": "mdi:heart-half-full",
	});
}

export default Component;
