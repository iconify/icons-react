import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxd1ljp-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxd1ljp-a"/>`,
		"fallback": "mdi:clock-digital",
	});
}

export default Component;
