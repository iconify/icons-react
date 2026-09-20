import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6fn0fb1j.css';
import '../../css/v/v9ilm3b2y.css';
import '../../css/w/wq0hmuiej.css';
import '../../css/a/afyu49bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l6fn0fb1j"/><path class="v9ilm3b2y"/><path class="wq0hmuiej"/><path class="afyu49bic"/></g>`,
		"fallback": "solar:clapperboard-open-bold",
	});
}

export default Component;
