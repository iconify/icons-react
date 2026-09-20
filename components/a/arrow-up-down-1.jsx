import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds6f2iupw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds6f2iupw"/>`,
		"fallback": "proicons:arrow-up-down-1",
	});
}

export default Component;
