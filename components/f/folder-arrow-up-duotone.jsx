import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tcxiwh5fp.css';
import '../../css/l/lyx9rne7u.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tcxiwh5fp"/><path class="lyx9rne7u"/></g>`,
		"fallback": "pullo:folder-arrow-up-duotone",
	});
}

export default Component;
