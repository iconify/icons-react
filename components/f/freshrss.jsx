import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnz5nebja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnz5nebja"/>`,
		"fallback": "thesvg:freshrss",
	});
}

export default Component;
