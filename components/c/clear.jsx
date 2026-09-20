import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvx3k5b5o.css';
import '../../css/f/f3yq4bbos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvx3k5b5o"/><path class="f3yq4bbos"/>`,
		"fallback": "ooui:clear",
	});
}

export default Component;
