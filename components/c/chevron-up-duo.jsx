import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eszjr8qre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eszjr8qre"/>`,
		"fallback": "withicons:chevron-up-duo",
	});
}

export default Component;
