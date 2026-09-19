import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pepvs8ble.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pepvs8ble"/>`,
		"fallback": "dinkie-icons:input-latin-capital-letters-filled",
	});
}

export default Component;
