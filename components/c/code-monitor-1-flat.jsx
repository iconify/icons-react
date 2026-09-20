import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/ht783wbsg.css';
import '../../css/q/q7h2v6bia.css';
import '../../css/z/zx5ptubbn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ht783wbsg"/><path class="q7h2v6bia"/><path class="zx5ptubbn"/></g>`,
		"fallback": "streamline-color:code-monitor-1-flat",
	});
}

export default Component;
