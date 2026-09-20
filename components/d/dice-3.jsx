import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gugip7bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gugip7bmr"/>`,
		"fallback": "nrk:dice-3",
	});
}

export default Component;
