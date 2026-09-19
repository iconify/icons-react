import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6851kb2f.css';
import '../../css/j/jayy_jupc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v6851kb2f"/><path class="jayy_jupc"/></g>`,
		"fallback": "hugeicons:hotel-01",
	});
}

export default Component;
