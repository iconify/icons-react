import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y6iojqb3m.css';
import '../../css/r/r81zoppqz.css';
import '../../css/w/w2-237bxg.css';
import '../../css/p/pdzxnyjvp.css';
import '../../css/c/c2th96roa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y6iojqb3m"/><path class="r81zoppqz"/><path class="w2-237bxg wm-a"/><path class="pdzxnyjvp"/><path class="c2th96roa wm-a"/></g>`,
		"fallback": "withicons:boxes",
	});
}

export default Component;
