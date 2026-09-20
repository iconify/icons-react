import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjfkgwkdz.css';
import '../../css/n/nisxehbfu.css';
import '../../css/a/a6d48fbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yjfkgwkdz"/><path class="nisxehbfu"/><path class="a6d48fbel"/></g>`,
		"fallback": "pixelarticons:bell-off-sharp",
	});
}

export default Component;
