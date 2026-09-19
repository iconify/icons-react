import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9y54obih.css';
import '../../css/f/ftd3vipaa.css';
import '../../css/w/www_habqm.css';
import '../../css/x/xd4kzdbhz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9y54obih"/><path class="ftd3vipaa"/><path class="www_habqm"/><path class="xd4kzdbhz"/></g>`,
		"fallback": "glyphs:die-3-duo",
	});
}

export default Component;
