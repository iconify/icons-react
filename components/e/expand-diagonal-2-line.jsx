import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlls_m23z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlls_m23z"/>`,
		"fallback": "ri:expand-diagonal-2-line",
	});
}

export default Component;
