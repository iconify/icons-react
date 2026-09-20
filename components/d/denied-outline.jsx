import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy6uiklgm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy6uiklgm"/>`,
		"fallback": "teenyicons:denied-outline",
	});
}

export default Component;
