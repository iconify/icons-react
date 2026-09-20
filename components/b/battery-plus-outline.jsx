import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeqf11zww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeqf11zww"/>`,
		"fallback": "mdi:battery-plus-outline",
	});
}

export default Component;
