import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x91ufzihd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x91ufzihd"/>`,
		"fallback": "thesvg-color:accuweather",
	});
}

export default Component;
