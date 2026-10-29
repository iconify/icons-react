import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwn6o4bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwn6o4bra"/>`,
		"fallback": "withicons:car-front-solid",
	});
}

export default Component;
