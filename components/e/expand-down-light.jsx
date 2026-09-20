import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrj2iywqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrj2iywqi"/>`,
		"fallback": "lets-icons:expand-down-light",
	});
}

export default Component;
