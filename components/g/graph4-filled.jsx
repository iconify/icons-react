import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p11ftbc1d.css';
import '../../css/i/ifd-pcv0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p11ftbc1d"/><path class="ifd-pcv0o"/></g>`,
		"fallback": "reicon:graph4-filled",
	});
}

export default Component;
