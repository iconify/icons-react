import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nnc71dbsl.css';
import '../../css/i/imnimkbei.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="nnc71dbsl"/><path class="imnimkbei"/></g>`,
		"fallback": "lsicon:circle-star-outline",
	});
}

export default Component;
