import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij883nb6j.css';
import '../../css/n/ninqfyb4i.css';
import '../../css/w/wkizchjmy.css';
import '../../css/r/rau80ob0u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ij883nb6j"/><path clip-rule="evenodd" class="ninqfyb4i"/><path class="wkizchjmy"/><path class="rau80ob0u"/></g>`,
		"fallback": "glyphs:globe-africa-duo",
	});
}

export default Component;
