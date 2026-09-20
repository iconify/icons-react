import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvpk0lwda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvpk0lwda"/>`,
		"fallback": "tabler:currency-leu",
	});
}

export default Component;
