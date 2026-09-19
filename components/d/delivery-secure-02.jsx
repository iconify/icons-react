import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ada5cgbjk.css';
import '../../css/w/w-o6hg-yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ada5cgbjk"/><path class="w-o6hg-yd"/></g>`,
		"fallback": "hugeicons:delivery-secure-02",
	});
}

export default Component;
