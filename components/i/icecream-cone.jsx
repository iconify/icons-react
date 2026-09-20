import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/g7rh5ubwg.css';
import '../../css/a/alt7-0ukg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="g7rh5ubwg"/><path class="alt7-0ukg"/></g>`,
		"fallback": "streamline-cyber:icecream-cone",
	});
}

export default Component;
