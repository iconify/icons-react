import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/ppu0h3vpg.css';
import '../../css/t/t9hq5wiig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ppu0h3vpg"/><path class="t9hq5wiig"/></g>`,
		"fallback": "andrsrxn:arrow-u-down",
	});
}

export default Component;
