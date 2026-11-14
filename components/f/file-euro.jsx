import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ucgpwtbzb.css';
import '../../css/g/gzfk8ub8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ucgpwtbzb"/><path class="gzfk8ub8d"/></g>`,
		"fallback": "hugeicons:file-euro",
	});
}

export default Component;
