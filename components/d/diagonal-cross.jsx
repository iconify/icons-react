import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h911x3vnn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h911x3vnn"/>`,
		"fallback": "dinkie-icons:diagonal-cross",
	});
}

export default Component;
