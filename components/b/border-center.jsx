import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acfm7-96o.css';
import '../../css/d/dkqquzbwr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="acfm7-96o"/><path class="dkqquzbwr"/></g>`,
		"fallback": "glyphs-poly:border-center",
	});
}

export default Component;
