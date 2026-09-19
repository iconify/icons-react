import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de_6mkbzh.css';
import '../../css/q/qgo6c_bos.css';
import '../../css/u/u3zbeznyl.css';
import '../../css/w/ww5vd8bvt.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 de_6mkbzh"/><path class="clr-i-outline clr-i-outline-path-2 qgo6c_bos"/><path class="clr-i-outline clr-i-outline-path-3 u3zbeznyl"/><path class="clr-i-outline clr-i-outline-path-4 ww5vd8bvt"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:add-text-line",
	});
}

export default Component;
