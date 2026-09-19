import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slsyuwjqx.css';
import '../../css/y/yd2zepbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slsyuwjqx"/><path clip-rule="evenodd" class="yd2zepbyi"/>`,
		"fallback": "akar-icons:css-fill",
	});
}

export default Component;
