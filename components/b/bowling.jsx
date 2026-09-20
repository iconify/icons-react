import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9axknb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9axknb5k"/>`,
		"fallback": "mdi:bowling",
	});
}

export default Component;
