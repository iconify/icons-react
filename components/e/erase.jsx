import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl17tqb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl17tqb1f"/>`,
		"fallback": "iconoir:erase",
	});
}

export default Component;
