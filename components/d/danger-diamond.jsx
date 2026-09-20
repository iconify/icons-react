import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t76ykjbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t76ykjbya"/>`,
		"fallback": "mynaui:danger-diamond",
	});
}

export default Component;
