import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik3bbzb2c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik3bbzb2c"/>`,
		"fallback": "dinkie-icons:axe-filled",
	});
}

export default Component;
