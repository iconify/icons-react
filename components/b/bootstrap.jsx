import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0yudob-p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0yudob-p"/>`,
		"fallback": "devicon-plain:bootstrap",
	});
}

export default Component;
