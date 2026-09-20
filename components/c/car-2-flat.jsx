import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/symvdirkk.css';
import '../../css/m/mo-m0vn9j.css';
import '../../css/f/ftu19bcfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="symvdirkk"/><path class="mo-m0vn9j"/><path class="ftu19bcfd"/></g>`,
		"fallback": "streamline-sharp-color:car-2-flat",
	});
}

export default Component;
