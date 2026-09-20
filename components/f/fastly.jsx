import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhh6-acix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhh6-acix"/>`,
		"fallback": "thesvg-color:fastly",
	});
}

export default Component;
