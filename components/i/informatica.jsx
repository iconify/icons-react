import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st8y7bi7g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st8y7bi7g"/>`,
		"fallback": "devicon-plain:informatica",
	});
}

export default Component;
