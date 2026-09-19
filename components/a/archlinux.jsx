import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-96robzh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-96robzh"/>`,
		"fallback": "devicon-plain:archlinux",
	});
}

export default Component;
