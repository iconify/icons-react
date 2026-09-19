import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3qq0hx9i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3qq0hx9i"/>`,
		"fallback": "devicon-plain:chakraui",
	});
}

export default Component;
