import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fflq7tbok.css';
import '../../css/e/eyaeoybft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fflq7tbok"/><path class="eyaeoybft"/></g>`,
		"fallback": "reicon:anchor-filled",
	});
}

export default Component;
