import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u64obkvvp.css';
import '../../css/k/koaozeboc.css';
import '../../css/l/ldpo4n3qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u64obkvvp"/><path class="koaozeboc"/><path class="ldpo4n3qb"/></g>`,
		"fallback": "tdesign:ai-chart-bar",
	});
}

export default Component;
