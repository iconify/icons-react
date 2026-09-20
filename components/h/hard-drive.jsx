import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6igj0bgu.css';
import '../../css/s/sm2tgsbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z6igj0bgu"/><path clip-rule="evenodd" class="sm2tgsbpd"/></g>`,
		"fallback": "reicon:hard-drive",
	});
}

export default Component;
