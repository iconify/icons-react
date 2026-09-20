import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/prxbgwngf.css';
import '../../css/u/ui-bcv6yx.css';
import '../../css/u/ubnma2bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="prxbgwngf"/><path class="ui-bcv6yx"/><path class="ubnma2bri"/></g>`,
		"fallback": "reicon:chef-hat-heart-duotone",
	});
}

export default Component;
