import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idh17h92l.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idh17h92l"/>`,
		"fallback": "thesvg-color:base-ui-dark",
	});
}

export default Component;
