import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmbsh3b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmbsh3b8x"/>`,
		"fallback": "noviair-light:cursor-text",
	});
}

export default Component;
