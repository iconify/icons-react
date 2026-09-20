import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr_nio-1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr_nio-1c"/>`,
		"fallback": "thesvg-color:inkdrop",
	});
}

export default Component;
