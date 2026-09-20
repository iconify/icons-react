import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdqf4i_7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdqf4i_7p"/>`,
		"fallback": "mdi:fast-forward-5",
	});
}

export default Component;
