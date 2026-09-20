import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbp5xr6qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbp5xr6qo"/>`,
		"fallback": "mdi:circle-transparent",
	});
}

export default Component;
