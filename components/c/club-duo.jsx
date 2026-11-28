import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/digwz38ld.css';
import '../../css/n/nqbz-5bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="digwz38ld secondary"/><path class="nqbz-5bri primary"/>`,
		"fallback": "iconaut:club-duo",
	});
}

export default Component;
