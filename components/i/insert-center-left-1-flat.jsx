import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p18lhgbvs.css';
import '../../css/x/x16jwho3k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p18lhgbvs"/><path class="x16jwho3k"/></g>`,
		"fallback": "streamline-flex-color:insert-center-left-1-flat",
	});
}

export default Component;
