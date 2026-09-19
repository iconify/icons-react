import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ren0ysbsb.css';
import '../../css/a/a65i-2rcs.css';
import '../../css/j/j3_lbk0ge.css';
import '../../css/v/v8yo84byq.css';
import '../../css/v/vkp408btu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ren0ysbsb"/><path class="a65i-2rcs"/><path class="j3_lbk0ge"/><path class="v8yo84byq"/><path class="vkp408btu"/></g>`,
		"fallback": "fluent-emoji-flat:cooked-rice",
	});
}

export default Component;
