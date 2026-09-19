import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/m/myo7tqb8f.css';
import '../../css/b/b59cqdtuz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path clip-rule="evenodd" class="myo7tqb8f"/><path class="b59cqdtuz"/></g>`,
		"fallback": "glyphs:globe-europe-duo",
	});
}

export default Component;
