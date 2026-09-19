import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw8_z_2nm.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw8_z_2nm"/>`,
		"fallback": "el:circle-arrow-right",
	});
}

export default Component;
