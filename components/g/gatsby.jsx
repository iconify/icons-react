import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi018xb3f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi018xb3f"/>`,
		"fallback": "thesvg-color:gatsby",
	});
}

export default Component;
