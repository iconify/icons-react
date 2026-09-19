import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/n/nrjc2qb-u.css';
import '../../css/c/cq0hx26ww.css';
import '../../css/w/wo0ynd7fl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path class="nrjc2qb-u"/><path class="cq0hx26ww"/><path class="wo0ynd7fl"/></g>`,
		"fallback": "glyphs:globe-west-duo",
	});
}

export default Component;
