import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svdu2hbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svdu2hbpi"/>`,
		"fallback": "mdi-light:format-float-none",
	});
}

export default Component;
