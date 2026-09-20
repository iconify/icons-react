import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr2exacnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wr2exacnp"/>`,
		"fallback": "si:building-fill",
	});
}

export default Component;
