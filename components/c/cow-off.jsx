import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szf_0rulk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szf_0rulk"/>`,
		"fallback": "mdi:cow-off",
	});
}

export default Component;
