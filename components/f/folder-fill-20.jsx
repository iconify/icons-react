import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr5sy3x-w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr5sy3x-w"/>`,
		"fallback": "garden:folder-fill-20",
	});
}

export default Component;
