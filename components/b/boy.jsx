import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xss0pv79m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xss0pv79m"/>`,
		"fallback": "dinkie-icons:boy",
	});
}

export default Component;
