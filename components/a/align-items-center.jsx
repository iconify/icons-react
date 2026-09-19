import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msgv33qhw.css';
import '../../css/n/np_h2lbss.css';
import '../../css/a/ay1ozab3a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="msgv33qhw"/><path class="np_h2lbss"/><path class="ay1ozab3a"/></g>`,
		"fallback": "glyphs-poly:align-items-center",
	});
}

export default Component;
