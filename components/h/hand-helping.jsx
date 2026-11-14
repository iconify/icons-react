import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/plf9uybrx.css';
import '../../css/g/gxfcybl7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="plf9uybrx"/><path class="gxfcybl7l"/></g>`,
		"fallback": "hugeicons:hand-helping",
	});
}

export default Component;
