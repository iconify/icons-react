import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d19_u-5hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d19_u-5hq"/>`,
		"fallback": "vadivam:chart-column",
	});
}

export default Component;
