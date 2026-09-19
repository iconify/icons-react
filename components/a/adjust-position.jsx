import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i3ncrccpa.css';
import '../../css/w/w2o1tebia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i3ncrccpa"/><path class="w2o1tebia"/></g>`,
		"fallback": "hugeicons:adjust-position",
	});
}

export default Component;
