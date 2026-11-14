import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ylp2f9iqe.css';
import '../../css/x/xvv72-blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ylp2f9iqe"/><path class="xvv72-blv"/></g>`,
		"fallback": "hugeicons:all-bookmark",
	});
}

export default Component;
