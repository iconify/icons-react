import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr_vn-bin.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr_vn-bin"/>`,
		"fallback": "jam:help-f",
	});
}

export default Component;
