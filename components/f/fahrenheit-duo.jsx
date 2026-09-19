import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-heylbza.css';
import '../../css/q/qg39kdb-t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d-heylbza"/><path class="qg39kdb-t"/></g>`,
		"fallback": "glyphs:fahrenheit-duo",
	});
}

export default Component;
