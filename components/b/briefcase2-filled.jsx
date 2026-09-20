import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-s5hnbyu.css';
import '../../css/y/y6hy6hbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n-s5hnbyu"/><path clip-rule="evenodd" class="y6hy6hbiq"/></g>`,
		"fallback": "reicon:briefcase2-filled",
	});
}

export default Component;
