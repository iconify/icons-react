import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nzmbifb1k.css';
import '../../css/o/oudolenqd.css';
import '../../css/o/o3jl589pi.css';
import '../../css/y/y_3awmanz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="nzmbifb1k"/><path class="oudolenqd"/><circle class="o3jl589pi"/><path class="y_3awmanz"/></g>`,
		"fallback": "hugeicons:bell-electric",
	});
}

export default Component;
