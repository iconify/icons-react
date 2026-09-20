import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i9sayvl3a.css';
import '../../css/e/ei2rqmvqu.css';
import '../../css/y/yx06r2bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i9sayvl3a"/><path class="ei2rqmvqu"/><path class="yx06r2bfh"/></g>`,
		"fallback": "streamline-freehand-color:advertising-money-idea",
	});
}

export default Component;
