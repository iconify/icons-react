import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_pwiya-z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_pwiya-z"/>`,
		"fallback": "pinhead:bicycle-and-baht",
	});
}

export default Component;
