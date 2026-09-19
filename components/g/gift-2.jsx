import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nte4bac7y.css';
import '../../css/c/co_eleb2k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="nte4bac7y"/><path class="co_eleb2k"/></g>`,
		"fallback": "glyphs-poly:gift-2",
	});
}

export default Component;
