import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb7_rvb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb7_rvb-g"/>`,
		"fallback": "vadivam:arrow-down-up",
	});
}

export default Component;
