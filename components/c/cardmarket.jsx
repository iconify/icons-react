import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfy9qtb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfy9qtb6i"/>`,
		"fallback": "thesvg:cardmarket",
	});
}

export default Component;
