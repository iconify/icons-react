import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9y54obih.css';
import '../../css/v/vqj6j6upz.css';
import '../../css/w/www_habqm.css';
import '../../css/y/yufnd7b4z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9y54obih"/><path class="vqj6j6upz"/><path class="www_habqm"/><path class="yufnd7b4z"/></g>`,
		"fallback": "glyphs:die-duo",
	});
}

export default Component;
