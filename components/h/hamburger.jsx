import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zg8176b8y.css';
import '../../css/v/vxxvskbna.css';
import '../../css/y/y6pi65bko.css';
import '../../css/d/dg65s3b2f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zg8176b8y"/><path class="vxxvskbna"/><path clip-rule="evenodd" class="y6pi65bko"/><path class="dg65s3b2f"/></g>`,
		"fallback": "pepicons:hamburger",
	});
}

export default Component;
