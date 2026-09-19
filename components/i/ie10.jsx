import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4a4zcb8d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4a4zcb8d"/>`,
		"fallback": "devicon:ie10",
	});
}

export default Component;
