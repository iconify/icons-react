import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gamftdbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gamftdbrg"/>`,
		"fallback": "simple-icons:codementor",
	});
}

export default Component;
