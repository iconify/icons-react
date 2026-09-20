import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r9fx9tx9u.css';
import '../../css/d/dzrc8rb0x.css';
import '../../css/j/jq-afy2wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r9fx9tx9u"/><path class="dzrc8rb0x"/><path class="jq-afy2wo"/></g>`,
		"fallback": "mynaui:heart-user",
	});
}

export default Component;
