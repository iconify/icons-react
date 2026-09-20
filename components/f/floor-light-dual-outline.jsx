import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqw0pwkwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqw0pwkwi"/>`,
		"fallback": "mdi:floor-light-dual-outline",
	});
}

export default Component;
