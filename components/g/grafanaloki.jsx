import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gudce39lu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gudce39lu"/>`,
		"fallback": "devicon-plain:grafanaloki",
	});
}

export default Component;
