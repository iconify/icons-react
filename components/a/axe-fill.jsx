import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epm_5nbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epm_5nbns"/>`,
		"fallback": "mingcute:axe-fill",
	});
}

export default Component;
