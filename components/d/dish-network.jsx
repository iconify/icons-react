import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3cmy1h5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3cmy1h5i"/>`,
		"fallback": "cbi:dish-network",
	});
}

export default Component;
