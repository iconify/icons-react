import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wjvamfynd.css';
import '../../css/b/bpbt2ob1c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wjvamfynd"/><path class="bpbt2ob1c"/></g>`,
		"fallback": "streamline-color:glasses-flat",
	});
}

export default Component;
