import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0_uobbtg.css';
import '../../css/u/ussqqxbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="r0_uobbtg"/><path class="ussqqxbyi"/>`,
		"fallback": "bx:bx-hotel",
	});
}

export default Component;
