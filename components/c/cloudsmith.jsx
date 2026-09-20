import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncu15vb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncu15vb6o"/>`,
		"fallback": "thesvg-color:cloudsmith",
	});
}

export default Component;
