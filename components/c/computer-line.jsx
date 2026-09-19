import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obl_v8k7n.css';
import '../../css/x/x69c3-r_y.css';
import '../../css/z/zxq6qwowc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 obl_v8k7n"/><path class="clr-i-outline clr-i-outline-path-2 x69c3-r_y"/><path class="clr-i-outline clr-i-outline-path-3 zxq6qwowc"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:computer-line",
	});
}

export default Component;
