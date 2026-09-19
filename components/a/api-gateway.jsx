import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gah4jwbcn.css';
import '../../css/n/nuktfyl9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gah4jwbcn"/><path class="nuktfyl9s"/></g>`,
		"fallback": "hugeicons:api-gateway",
	});
}

export default Component;
