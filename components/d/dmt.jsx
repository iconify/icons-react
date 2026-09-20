import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-f8k3blw.css';
import '../../css/a/a4zhphb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-f8k3blw"/><path class="a4zhphb_q"/>`,
		"fallback": "token:dmt",
	});
}

export default Component;
