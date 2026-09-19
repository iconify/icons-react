import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_u3mlb5u.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_u3mlb5u"/>`,
		"fallback": "fontisto:export",
	});
}

export default Component;
