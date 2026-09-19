import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mt34s3bhs.css';
import '../../css/v/vig5ljzia.css';
import '../../css/d/dm66__bjg.css';
import '../../css/b/bvfbpgyzt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mt34s3bhs"/><path class="vig5ljzia"/><path class="dm66__bjg"/><path class="bvfbpgyzt"/></g>`,
		"fallback": "glyphs:alarm-clock-duo",
	});
}

export default Component;
