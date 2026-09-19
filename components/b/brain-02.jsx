import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/njm5o0bry.css';
import '../../css/x/xow5m5b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="njm5o0bry"/><path class="xow5m5b1c"/></g>`,
		"fallback": "hugeicons:brain-02",
	});
}

export default Component;
