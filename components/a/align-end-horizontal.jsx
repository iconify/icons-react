import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efmrq9x5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efmrq9x5p"/>`,
		"fallback": "vadivam:align-end-horizontal",
	});
}

export default Component;
