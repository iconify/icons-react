import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/a/ar9ebrmpm.css';
import '../../css/c/cq0hx26ww.css';
import '../../css/u/uim7_ccml.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path class="ar9ebrmpm"/><path class="cq0hx26ww"/><path class="uim7_ccml"/></g>`,
		"fallback": "glyphs:globe-americas-duo",
	});
}

export default Component;
