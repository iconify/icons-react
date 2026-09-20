import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-61lmm4b.css';
import '../../css/v/v-wrjcb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-61lmm4b"/><path class="v-wrjcb4c"/>`,
		"fallback": "streamline-ultimate:font-size-bold",
	});
}

export default Component;
