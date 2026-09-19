import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eoqf6wr9s.css';
import '../../css/z/z86__e_oc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eoqf6wr9s"/><path class="z86__e_oc"/></g>`,
		"fallback": "glyphs:exclamation-triangle-duo",
	});
}

export default Component;
