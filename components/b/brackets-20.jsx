import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajthowb1c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajthowb1c"/>`,
		"fallback": "energy-icons:brackets-20",
	});
}

export default Component;
