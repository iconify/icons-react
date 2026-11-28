import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkk5hqbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkk5hqbwn"/>`,
		"fallback": "noviair-light:alarm-clock-x",
	});
}

export default Component;
