import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckyq5qvae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckyq5qvae"/>`,
		"fallback": "mynaui:at-solid",
	});
}

export default Component;
