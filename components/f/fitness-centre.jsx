import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8frt8zje.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8frt8zje"/>`,
		"fallback": "maki:fitness-centre",
	});
}

export default Component;
