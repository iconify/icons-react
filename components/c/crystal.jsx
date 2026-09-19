import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5hsqdgum.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5hsqdgum"/>`,
		"fallback": "devicon:crystal",
	});
}

export default Component;
