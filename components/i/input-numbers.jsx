import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyzek-p_m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyzek-p_m"/>`,
		"fallback": "dinkie-icons:input-numbers",
	});
}

export default Component;
