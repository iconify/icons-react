import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_fu2bbyw.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_fu2bbyw"/>`,
		"fallback": "wpf:delete-shield",
	});
}

export default Component;
