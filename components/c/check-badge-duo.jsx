import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xtg29obac.css';
import '../../css/m/mvdz39bko.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xtg29obac"/><path class="mvdz39bko"/></g>`,
		"fallback": "glyphs:check-badge-duo",
	});
}

export default Component;
