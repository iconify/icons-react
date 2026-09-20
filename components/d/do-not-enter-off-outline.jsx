import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmh-avb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmh-avb2f"/>`,
		"fallback": "mdi:do-not-enter-off-outline",
	});
}

export default Component;
