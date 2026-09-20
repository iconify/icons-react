import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ceg880b5a.css';
import '../../css/n/nb6_qyrpv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ceg880b5a"/><path class="nb6_qyrpv"/></g>`,
		"fallback": "streamline-color:insert-side-flat",
	});
}

export default Component;
