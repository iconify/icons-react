import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltryvnb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltryvnb1f"/>`,
		"fallback": "uis:angle-down",
	});
}

export default Component;
