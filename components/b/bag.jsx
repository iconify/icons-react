import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au-v0i33b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au-v0i33b"/>`,
		"fallback": "uit:bag",
	});
}

export default Component;
