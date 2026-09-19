import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnxmi3-ee.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnxmi3-ee"/>`,
		"fallback": "f7:equal-circle",
	});
}

export default Component;
