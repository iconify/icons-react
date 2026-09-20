import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/s30a-_b1r.css';
import '../../css/b/bxi8veauq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="s30a-_b1r"/><path class="bxi8veauq"/></g>`,
		"fallback": "streamline-sharp-color:flip-vertical-square-1",
	});
}

export default Component;
