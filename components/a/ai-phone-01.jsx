import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/to5dmvbxc.css';
import '../../css/p/plcx77r6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="to5dmvbxc"/><path class="plcx77r6t"/></g>`,
		"fallback": "hugeicons:ai-phone-01",
	});
}

export default Component;
