import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuyywqbtu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuyywqbtu"/>`,
		"fallback": "devicon-plain:amazonwebservices",
	});
}

export default Component;
