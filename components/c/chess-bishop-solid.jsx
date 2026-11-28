import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc8awf2mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc8awf2mg"/>`,
		"fallback": "iconaut:chess-bishop-solid",
	});
}

export default Component;
