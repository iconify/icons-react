import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jzul2fbql.css';
import '../../css/s/sg0f65kkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jzul2fbql"/><path class="sg0f65kkn"/></g>`,
		"fallback": "hugeicons:briefcase-02",
	});
}

export default Component;
