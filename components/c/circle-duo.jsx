import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp_1auk9l.css';
import '../../css/c/cuj9p20cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp_1auk9l secondary"/><path class="cuj9p20cj primary"/>`,
		"fallback": "iconaut:circle-duo",
	});
}

export default Component;
