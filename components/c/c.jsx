import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfpibsb0t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfpibsb0t"/>`,
		"fallback": "devicon:c",
	});
}

export default Component;
