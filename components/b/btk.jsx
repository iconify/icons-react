import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke5p3ibmy.css';
import '../../css/w/w25cgwhtz.css';

const viewBox = {"width":718.797,"height":401.847};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke5p3ibmy"/><path class="w25cgwhtz"/>`,
		"fallback": "thesvg-color:btk",
	});
}

export default Component;
