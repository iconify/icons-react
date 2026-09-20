import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv89s0poi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv89s0poi"/>`,
		"fallback": "vadivam:briefcase-business",
	});
}

export default Component;
