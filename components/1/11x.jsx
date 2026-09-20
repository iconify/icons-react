import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya2pbccmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya2pbccmy"/>`,
		"fallback": "thesvg:11x",
	});
}

export default Component;
