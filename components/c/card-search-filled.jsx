import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rb_6zxbcl.css';
import '../../css/u/u2gjaigap.css';
import '../../css/m/mvn6bybtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rb_6zxbcl"/><path class="u2gjaigap"/><path class="mvn6bybtl"/></g>`,
		"fallback": "reicon:card-search-filled",
	});
}

export default Component;
