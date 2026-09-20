import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-gtejb5v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-gtejb5v"/>`,
		"fallback": "maki:fuel-15",
	});
}

export default Component;
