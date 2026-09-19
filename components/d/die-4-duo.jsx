import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9y54obih.css';
import '../../css/n/n0drb7f8q.css';
import '../../css/w/www_habqm.css';
import '../../css/j/jbenyobad.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9y54obih"/><path class="n0drb7f8q"/><path class="www_habqm"/><path class="jbenyobad"/></g>`,
		"fallback": "glyphs:die-4-duo",
	});
}

export default Component;
