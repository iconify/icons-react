import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2i38iq9n.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x681dpbcn.css';
import '../../css/i/i0xkg4bfy.css';
import '../../css/z/zgle2b51t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG45VKsbNC" class="o2i38iq9n"/></defs><g class="cuyn6tgcc"><path class="x681dpbcn"/><use href="#SVG45VKsbNC"/><use href="#SVG45VKsbNC" class="i0xkg4bfy"/><path class="zgle2b51t"/></g>`,
		"fallback": "devicon-plain:ceylon-wordmark",
	});
}

export default Component;
