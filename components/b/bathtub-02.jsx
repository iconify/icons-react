import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/is90i7aof.css';
import '../../css/p/ptcswfbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="is90i7aof"/><path class="ptcswfbkn"/></g>`,
		"fallback": "hugeicons:bathtub-02",
	});
}

export default Component;
