import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz25ib40m.css';
import '../../css/v/vrup1skko.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pz25ib40m"/><path class="vrup1skko"/></g>`,
		"fallback": "glyphs:arrows-expand-quad-duo",
	});
}

export default Component;
