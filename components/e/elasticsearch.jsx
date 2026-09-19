import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umx86bbwo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umx86bbwo"/>`,
		"fallback": "devicon-plain:elasticsearch",
	});
}

export default Component;
