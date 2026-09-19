import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r17emtc4h.css';
import '../../css/z/zksadcb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r17emtc4h"/><path class="zksadcb5n"/></g>`,
		"fallback": "hugeicons:google-home",
	});
}

export default Component;
