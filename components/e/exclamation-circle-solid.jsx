import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzk00ybyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzk00ybyb"/>`,
		"fallback": "stash:exclamation-circle-solid",
	});
}

export default Component;
