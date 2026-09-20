import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9dgcowbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9dgcowbq"/>`,
		"fallback": "vadivam:arrow-up-0-1",
	});
}

export default Component;
