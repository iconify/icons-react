import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6uk8ob_t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6uk8ob_t"/>`,
		"fallback": "f7:eye-slash",
	});
}

export default Component;
