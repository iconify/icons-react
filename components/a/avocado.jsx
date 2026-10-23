import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neirp7okh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neirp7okh"/>`,
		"fallback": "vadivam:avocado",
	});
}

export default Component;
