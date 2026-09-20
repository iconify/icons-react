import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gza2rb70b.css';
import '../../css/z/zz2o6wb4l.css';
import '../../css/y/ylo_e9tjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gza2rb70b"/><path class="zz2o6wb4l"/><path class="ylo_e9tjc"/></g>`,
		"fallback": "reicon:cart-large3-duotone",
	});
}

export default Component;
