import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c9k37cbii.css';
import '../../css/v/vl_tx5t2k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c9k37cbii"/><path class="vl_tx5t2k"/></g>`,
		"fallback": "streamline-color:bug-antivirus-shield-flat",
	});
}

export default Component;
