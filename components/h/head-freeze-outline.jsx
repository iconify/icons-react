import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r22jfto4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r22jfto4a"/>`,
		"fallback": "mdi:head-freeze-outline",
	});
}

export default Component;
