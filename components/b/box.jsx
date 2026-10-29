import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k19gm4bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k19gm4bho"/>`,
		"fallback": "vadivam:box",
	});
}

export default Component;
