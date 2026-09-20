import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plzau2jqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plzau2jqi"/>`,
		"fallback": "thesvg-color:caixabank",
	});
}

export default Component;
