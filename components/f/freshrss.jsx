import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za97yob6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za97yob6v"/>`,
		"fallback": "thesvg-color:freshrss",
	});
}

export default Component;
