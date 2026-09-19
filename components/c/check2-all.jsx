import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aro-8uk-y.css';
import '../../css/z/zel2m4bof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aro-8uk-y"/><path class="zel2m4bof"/></g>`,
		"fallback": "bi:check2-all",
	});
}

export default Component;
