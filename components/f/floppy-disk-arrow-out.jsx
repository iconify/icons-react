import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pn8-ltl_d.css';
import '../../css/d/do3pckibe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pn8-ltl_d"/><path class="do3pckibe"/></g>`,
		"fallback": "iconoir:floppy-disk-arrow-out",
	});
}

export default Component;
