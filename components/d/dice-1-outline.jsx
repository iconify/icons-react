import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtoae-bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtoae-bwz"/>`,
		"fallback": "mdi:dice-1-outline",
	});
}

export default Component;
