import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9y54obih.css';
import '../../css/p/prum_db3v.css';
import '../../css/w/www_habqm.css';
import '../../css/q/qki8_9bca.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9y54obih"/><path class="prum_db3v"/><path class="www_habqm"/><path class="qki8_9bca"/></g>`,
		"fallback": "glyphs:die-1-duo",
	});
}

export default Component;
