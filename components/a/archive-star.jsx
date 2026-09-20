import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9y9f9u5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9y9f9u5a"/>`,
		"fallback": "mdi:archive-star",
	});
}

export default Component;
