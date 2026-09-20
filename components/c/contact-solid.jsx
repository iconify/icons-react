import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkc4x7rmc.css';
import '../../css/j/j5ymz25ec.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hkc4x7rmc"/><path class="j5ymz25ec"/>`,
		"fallback": "teenyicons:contact-solid",
	});
}

export default Component;
