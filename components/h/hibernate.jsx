import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfw9hvbmx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfw9hvbmx"/>`,
		"fallback": "devicon-plain:hibernate",
	});
}

export default Component;
