import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr55u4bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr55u4bvo"/>`,
		"fallback": "noviair-light:film-plus",
	});
}

export default Component;
