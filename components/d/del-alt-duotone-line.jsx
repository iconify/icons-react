import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tv5tdk3ma.css';
import '../../css/n/nlcw3p9xy.css';
import '../../css/g/ghtk6ab_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tv5tdk3ma"/><ellipse class="nlcw3p9xy"/><path class="ghtk6ab_i"/></g>`,
		"fallback": "lets-icons:del-alt-duotone-line",
	});
}

export default Component;
