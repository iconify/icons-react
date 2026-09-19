import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwt1mrh8b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwt1mrh8b"/>`,
		"fallback": "devicon-plain:cakephp",
	});
}

export default Component;
