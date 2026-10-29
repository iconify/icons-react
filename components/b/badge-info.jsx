import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rxln7ub1f.css';
import '../../css/c/crwetj7pb.css';
import '../../css/w/w_klg8-fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rxln7ub1f"/><path class="crwetj7pb"/><path class="w_klg8-fu"/></g>`,
		"fallback": "withicons-bauhaus:badge-info",
	});
}

export default Component;
