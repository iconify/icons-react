import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/utgpl5beo.css';
import '../../css/h/h36a2vjzh.css';
import '../../css/p/ps2elvbds.css';
import '../../css/z/z6e36cz-m.css';
import '../../css/w/wva01ilaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="utgpl5beo"/><path class="h36a2vjzh"/><path class="ps2elvbds"/><rect class="z6e36cz-m"/><path class="wva01ilaz"/></g>`,
		"fallback": "evicons:dealer-charging",
	});
}

export default Component;
