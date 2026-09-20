import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or2oxoa9w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or2oxoa9w"/>`,
		"fallback": "maki:heliport-15",
	});
}

export default Component;
