import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez8p2nbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez8p2nbzg"/>`,
		"fallback": "iconaut:broom-sparkles-solid",
	});
}

export default Component;
