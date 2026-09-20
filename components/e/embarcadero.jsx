import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-idq0lhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-idq0lhx"/>`,
		"fallback": "thesvg-color:embarcadero",
	});
}

export default Component;
