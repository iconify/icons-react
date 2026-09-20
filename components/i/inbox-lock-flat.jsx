import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cjed9ybyo.css';
import '../../css/j/j3rgyclca.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cjed9ybyo"/><path class="j3rgyclca"/></g>`,
		"fallback": "streamline-color:inbox-lock-flat",
	});
}

export default Component;
