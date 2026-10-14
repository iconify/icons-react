import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/jp8ni5u5f.css';
import '../../css/c/cd4vgnb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="jp8ni5u5f"/><path class="cd4vgnb2r"/></g>`,
		"fallback": "matita:chevrons-up",
	});
}

export default Component;
