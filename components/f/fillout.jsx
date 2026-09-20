import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at458kt6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at458kt6i"/>`,
		"fallback": "thesvg-color:fillout",
	});
}

export default Component;
