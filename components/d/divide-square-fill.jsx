import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua200fb8s.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua200fb8s"/>`,
		"fallback": "f7:divide-square-fill",
	});
}

export default Component;
