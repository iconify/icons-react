import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgn242ovo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sgn242ovo"/>`,
		"fallback": "reicon:buildings3",
	});
}

export default Component;
