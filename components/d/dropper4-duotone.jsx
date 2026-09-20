import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5z4ltqup.css';
import '../../css/b/blrem8b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o5z4ltqup"/><path class="blrem8b-o"/></g>`,
		"fallback": "reicon:dropper4-duotone",
	});
}

export default Component;
