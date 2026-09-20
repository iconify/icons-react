import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfwqu7n8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfwqu7n8b"/>`,
		"fallback": "thesvg-color:clarivate",
	});
}

export default Component;
