import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ffhrjgd0a.css';
import '../../css/a/ad8mu8bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ffhrjgd0a"/><path clip-rule="evenodd" class="ad8mu8bes"/></g>`,
		"fallback": "reicon:home-2",
	});
}

export default Component;
