import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hiygo1bss.css';
import '../../css/z/zcc0g_fqd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hiygo1bss"/><path class="zcc0g_fqd"/></g>`,
		"fallback": "glyphs:arrow-external-duo",
	});
}

export default Component;
