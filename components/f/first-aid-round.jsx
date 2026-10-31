import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adszbn4wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adszbn4wz"/>`,
		"fallback": "coolicons:first-aid-round",
	});
}

export default Component;
