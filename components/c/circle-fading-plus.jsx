import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec4i1g93h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec4i1g93h"/>`,
		"fallback": "vadivam:circle-fading-plus",
	});
}

export default Component;
