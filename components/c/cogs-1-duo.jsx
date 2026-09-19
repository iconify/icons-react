import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ga0m5_bsd.css';
import '../../css/h/hw8_fj8hd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ga0m5_bsd"/><path class="hw8_fj8hd"/></g>`,
		"fallback": "glyphs:cogs-1-duo",
	});
}

export default Component;
