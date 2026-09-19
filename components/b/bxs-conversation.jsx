import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0r_-hb1w.css';
import '../../css/u/um0weqbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0r_-hb1w"/><path class="um0weqbpg"/>`,
		"fallback": "bx:bxs-conversation",
	});
}

export default Component;
