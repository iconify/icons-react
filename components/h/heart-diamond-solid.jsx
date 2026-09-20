import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-_f9rb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-_f9rb9i"/>`,
		"fallback": "mynaui:heart-diamond-solid",
	});
}

export default Component;
