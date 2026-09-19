import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b90b8empi.css';
import '../../css/s/sekviebqb.css';
import '../../css/a/a70o7ccyb.css';
import '../../css/c/ctl48ubje.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b90b8empi"/><path class="sekviebqb"/><path class="a70o7ccyb"/><path class="ctl48ubje"/></g>`,
		"fallback": "glyphs:adjust-1-duo",
	});
}

export default Component;
