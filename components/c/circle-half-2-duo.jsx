import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lafhkbbho.css';
import '../../css/d/dk21-1b8g.css';
import '../../css/x/xodklybcw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lafhkbbho"/><path class="dk21-1b8g"/><path class="xodklybcw"/></g>`,
		"fallback": "glyphs:circle-half-2-duo",
	});
}

export default Component;
