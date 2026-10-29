import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eju6u3peq.css';
import '../../css/n/n-07r-b5s.css';
import '../../css/z/zxdihacgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="eju6u3peq"/><path class="n-07r-b5s wm-a"/><path class="zxdihacgb"/></g>`,
		"fallback": "withicons:flask-conical-duo",
	});
}

export default Component;
