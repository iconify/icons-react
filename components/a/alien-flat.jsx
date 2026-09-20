import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/ruw1feblx.css';
import '../../css/y/ye7v3hb5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ruw1feblx"/><path class="ye7v3hb5k"/></g>`,
		"fallback": "streamline-flex-color:alien-flat",
	});
}

export default Component;
