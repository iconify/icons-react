import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3ab1hb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3ab1hb5h"/>`,
		"fallback": "thesvg-color:dovetail",
	});
}

export default Component;
