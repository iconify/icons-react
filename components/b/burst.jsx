import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c6mrdvbeg.css';
import '../../css/k/kvl-yeb9p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="c6mrdvbeg"/><path class="kvl-yeb9p"/></g>`,
		"fallback": "cryptocurrency-color:burst",
	});
}

export default Component;
