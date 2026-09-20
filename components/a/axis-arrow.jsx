import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_zvc6bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_zvc6bvq"/>`,
		"fallback": "mdi:axis-arrow",
	});
}

export default Component;
