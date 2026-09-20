import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vfx75ndgo.css';
import '../../css/s/s-wy90jas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vfx75ndgo"/><path class="s-wy90jas"/></g>`,
		"fallback": "solar:end-call-line-duotone",
	});
}

export default Component;
