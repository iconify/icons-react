import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg205pb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg205pb1d"/>`,
		"fallback": "thesvg-color:buhl",
	});
}

export default Component;
