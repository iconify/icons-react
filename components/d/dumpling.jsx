import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8pl2ybmn.css';
import '../../css/c/cvrrw4eax.css';
import '../../css/m/mtszgmo6w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o8pl2ybmn"/><path class="cvrrw4eax"/><path class="mtszgmo6w"/></g>`,
		"fallback": "fluent-emoji-flat:dumpling",
	});
}

export default Component;
