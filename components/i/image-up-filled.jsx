import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcdm4-b9o.css';
import '../../css/n/nc20dabau.css';
import '../../css/i/i2zatytzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fcdm4-b9o"/><path class="nc20dabau"/><path class="i2zatytzp"/></g>`,
		"fallback": "reicon:image-up-filled",
	});
}

export default Component;
