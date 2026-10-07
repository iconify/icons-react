import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lj4xe-vyq.css';
import '../../css/y/yngtobcdp.css';
import '../../css/r/raupfd0_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lj4xe-vyq"/><path class="yngtobcdp"/><path class="raupfd0_a"/></g>`,
		"fallback": "iconoir:consumable",
	});
}

export default Component;
