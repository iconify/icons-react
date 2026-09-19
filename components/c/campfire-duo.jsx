import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4ksn1eet.css';
import '../../css/e/eh5vnvbnx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4ksn1eet"/><path class="eh5vnvbnx"/></g>`,
		"fallback": "glyphs:campfire-duo",
	});
}

export default Component;
