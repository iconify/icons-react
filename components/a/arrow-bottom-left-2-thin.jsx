import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiemr6b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiemr6b8o"/>`,
		"fallback": "iconamoon:arrow-bottom-left-2-thin",
	});
}

export default Component;
