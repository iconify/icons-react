import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltnu138lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltnu138lr"/>`,
		"fallback": "uil:clock-ten",
	});
}

export default Component;
