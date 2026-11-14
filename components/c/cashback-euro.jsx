import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bz59jbv1a.css';
import '../../css/d/do8agx2pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bz59jbv1a"/><path class="do8agx2pa"/></g>`,
		"fallback": "hugeicons:cashback-euro",
	});
}

export default Component;
