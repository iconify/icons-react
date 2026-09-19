import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf8b3dbjt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf8b3dbjt"/>`,
		"fallback": "devicon-plain:babel",
	});
}

export default Component;
