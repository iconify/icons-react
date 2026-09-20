import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcwm9zbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcwm9zbxs"/>`,
		"fallback": "pixelarticons:cloud-moon",
	});
}

export default Component;
