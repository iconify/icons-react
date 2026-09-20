import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vuiruvt0r.css';
import '../../css/b/bhj-hz7ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vuiruvt0r"/><path class="bhj-hz7ql"/></g>`,
		"fallback": "streamline-ultimate:factory-industrial-robot-arm-1",
	});
}

export default Component;
