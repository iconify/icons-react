import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/fm8qhx71g.css';
import '../../css/b/b0j-b6big.css';
import '../../css/a/aeny2r-on.css';
import '../../css/z/zt3yxf3vo.css';
import '../../css/w/wc8p0rbka.css';
import '../../css/y/yd6b1-bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="fm8qhx71g"/><path class="b0j-b6big"/></g><path class="aeny2r-on"/><path class="zt3yxf3vo"/><path class="wc8p0rbka"/><path class="yd6b1-bns"/></g>`,
		"fallback": "solar:brain-bold-duotone",
	});
}

export default Component;
