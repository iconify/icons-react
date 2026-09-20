import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beziji2lr.css';
import '../../css/a/a274jortb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beziji2lr"/><path class="a274jortb"/>`,
		"fallback": "lets-icons:fluid",
	});
}

export default Component;
