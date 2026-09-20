import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff61ui5pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ff61ui5pt"/>`,
		"fallback": "reicon:circle-arrow-up2",
	});
}

export default Component;
