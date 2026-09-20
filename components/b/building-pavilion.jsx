import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4e1w5h4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4e1w5h4h"/>`,
		"fallback": "tabler:building-pavilion",
	});
}

export default Component;
