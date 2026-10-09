import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtljkfb6y.css';
import '../../css/t/tkx4pub6f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtljkfb6y"/><path class="tkx4pub6f"/>`,
		"fallback": "energy-icons:battery-charging-20-bold",
	});
}

export default Component;
