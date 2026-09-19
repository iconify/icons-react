import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khamr3agh.css';
import '../../css/s/sr0tz7bgb.css';
import '../../css/u/ul7qsbczf.css';
import '../../css/y/ygy01sibr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="khamr3agh"/><path class="sr0tz7bgb"/><path clip-rule="evenodd" class="ul7qsbczf"/><path class="ygy01sibr"/></g>`,
		"fallback": "glyphs:crown-1-outline",
	});
}

export default Component;
