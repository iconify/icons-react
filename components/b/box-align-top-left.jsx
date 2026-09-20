import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9lm6ltaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9lm6ltaq"/>`,
		"fallback": "tabler:box-align-top-left",
	});
}

export default Component;
