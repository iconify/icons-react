import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lji_g4btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lji_g4btr"/>`,
		"fallback": "iconaut:clock-solid",
	});
}

export default Component;
