import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kg2fxtbmy.css';
import '../../css/x/xu-4hibki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kg2fxtbmy"/><path class="xu-4hibki"/></g>`,
		"fallback": "proicons:github",
	});
}

export default Component;
