import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i790zobve.css';
import '../../css/t/tgmqyfu-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i790zobve"/><path class="tgmqyfu-k"/></g>`,
		"fallback": "streamline-freehand-color:copy-paste-cut-scissors",
	});
}

export default Component;
