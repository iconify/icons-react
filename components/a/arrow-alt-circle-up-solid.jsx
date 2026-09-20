import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9lm0tj9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9lm0tj9r"/>`,
		"fallback": "pixel:arrow-alt-circle-up-solid",
	});
}

export default Component;
