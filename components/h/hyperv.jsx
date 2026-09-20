import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8c9z9b-d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8c9z9b-d"/>`,
		"fallback": "thesvg:hyperv",
	});
}

export default Component;
