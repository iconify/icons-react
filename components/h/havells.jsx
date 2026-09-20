import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gagg8eboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gagg8eboj"/>`,
		"fallback": "thesvg-color:havells",
	});
}

export default Component;
