import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lhuersbmq.css';
import '../../css/d/dfv1zh_dq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lhuersbmq"/><path class="dfv1zh_dq"/></g>`,
		"fallback": "streamline-color:ai-settings-spark-flat",
	});
}

export default Component;
