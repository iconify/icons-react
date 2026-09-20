import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vmchpqbpy.css';
import '../../css/i/ideagcboz.css';
import '../../css/e/e5x2664gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vmchpqbpy"/><rect class="ideagcboz"/><path class="e5x2664gk"/></g>`,
		"fallback": "proicons:add-square-multiple",
	});
}

export default Component;
