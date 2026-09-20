import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi6oorb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi6oorb5x"/>`,
		"fallback": "mdi:clock-edit-outline",
	});
}

export default Component;
