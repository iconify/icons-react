import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plwl6db0i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plwl6db0i"/>`,
		"fallback": "devicon-plain:csharp",
	});
}

export default Component;
