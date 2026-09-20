import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sdciri2wy.css';
import '../../css/c/c1kzyzbdf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sdciri2wy"/><path class="c1kzyzbdf"/></g>`,
		"fallback": "streamline-color:gmail-flat",
	});
}

export default Component;
