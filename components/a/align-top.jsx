import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w03spsqqf.css';
import '../../css/c/cprxbbc2g.css';
import '../../css/f/fhe7bvbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w03spsqqf"/><path class="cprxbbc2g"/><path class="fhe7bvbsr"/></g>`,
		"fallback": "streamline-ultimate-color:align-top",
	});
}

export default Component;
