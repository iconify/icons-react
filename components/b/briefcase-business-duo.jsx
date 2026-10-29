import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a-e_bv5nu.css';
import '../../css/s/svzd488el.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/d/dokvecbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a-e_bv5nu"/><path class="svzd488el wm-s"/><path class="y3j3vjb4e"/><path class="dokvecbou wm-a"/></g>`,
		"fallback": "withicons:briefcase-business-duo",
	});
}

export default Component;
