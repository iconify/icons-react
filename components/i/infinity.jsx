import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp9t31b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp9t31b3f"/>`,
		"fallback": "vadivam:infinity",
	});
}

export default Component;
