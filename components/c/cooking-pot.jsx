import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5ibo_bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5ibo_bpg"/>`,
		"fallback": "noviair-light:cooking-pot",
	});
}

export default Component;
