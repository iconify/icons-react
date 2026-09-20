import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bw-02zbgr.css';
import '../../css/y/yxzq4db8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bw-02zbgr"/><path class="yxzq4db8i"/></g>`,
		"fallback": "streamline-freehand-color:form-edition-text-2",
	});
}

export default Component;
