import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq8qkhbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq8qkhbbp"/>`,
		"fallback": "octicon:alert-fill-24",
	});
}

export default Component;
