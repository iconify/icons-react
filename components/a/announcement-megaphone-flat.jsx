import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wc9nglaeh.css';
import '../../css/v/v_k9vr9md.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wc9nglaeh"/><path class="v_k9vr9md"/></g>`,
		"fallback": "streamline-color:announcement-megaphone-flat",
	});
}

export default Component;
