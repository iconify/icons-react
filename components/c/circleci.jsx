import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn5r7ybyt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn5r7ybyt"/>`,
		"fallback": "devicon-plain:circleci",
	});
}

export default Component;
