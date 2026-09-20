import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb_w47var.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb_w47var"/>`,
		"fallback": "thesvg:falcon",
	});
}

export default Component;
