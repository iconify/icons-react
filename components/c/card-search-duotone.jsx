import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9hh3_5nb.css';
import '../../css/m/mvn6bybtl.css';
import '../../css/r/rb_6zxbcl.css';
import '../../css/u/uped8l_dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d9hh3_5nb"/><path class="mvn6bybtl"/><path clip-rule="evenodd" class="rb_6zxbcl"/><path class="uped8l_dw"/></g>`,
		"fallback": "reicon:card-search-duotone",
	});
}

export default Component;
