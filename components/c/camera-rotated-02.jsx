import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pvkze8dif.css';
import '../../css/o/o_2ogi-bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pvkze8dif"/><path class="o_2ogi-bv"/></g>`,
		"fallback": "hugeicons:camera-rotated-02",
	});
}

export default Component;
