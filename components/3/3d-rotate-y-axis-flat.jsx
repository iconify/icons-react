import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/frf0d1bwj.css';
import '../../css/t/tld_x0aoe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="frf0d1bwj"/><path class="tld_x0aoe"/></g>`,
		"fallback": "streamline-flex-color:3d-rotate-y-axis-flat",
	});
}

export default Component;
