import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kav1tbf9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kav1tbf9h"/>`,
		"fallback": "vadivam:arrow-up-a-z",
	});
}

export default Component;
