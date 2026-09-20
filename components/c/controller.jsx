import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2d15vbqw.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2d15vbqw"/>`,
		"fallback": "wpf:controller",
	});
}

export default Component;
