import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o6dqdjbfh.css';
import '../../css/y/yjiaskbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o6dqdjbfh"/><path class="yjiaskbqz"/></g>`,
		"fallback": "streamline-sharp-color:copy-link-flat",
	});
}

export default Component;
