import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkme35pvv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkme35pvv"/>`,
		"fallback": "devicon-plain:homeassistant",
	});
}

export default Component;
