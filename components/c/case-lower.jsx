import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z9-ek8f5j.css';
import '../../css/g/g5ykuz3vl.css';
import '../../css/o/og5669pjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k z9-ek8f5j"/><path class="g5ykuz3vl wm-a"/><path class="og5669pjp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:case-lower",
	});
}

export default Component;
