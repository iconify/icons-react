import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yv3jn7vjn.css';
import '../../css/u/ui7vyv9lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yv3jn7vjn"/><path class="ui7vyv9lr"/></g>`,
		"fallback": "andrsrxn:check-double",
	});
}

export default Component;
