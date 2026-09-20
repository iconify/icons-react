import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o25rrxbqg.css';
import '../../css/k/ky67sqbnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o25rrxbqg"/><path class="ky67sqbnd"/>`,
		"fallback": "selfhst:adventurelog-dark",
	});
}

export default Component;
