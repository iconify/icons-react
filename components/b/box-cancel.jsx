import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myf0cab_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myf0cab_a"/>`,
		"fallback": "mdi:box-cancel",
	});
}

export default Component;
