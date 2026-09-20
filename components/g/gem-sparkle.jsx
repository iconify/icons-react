import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xibuolb2y.css';
import '../../css/c/c85egjb-l.css';
import '../../css/a/ap9enlbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xibuolb2y"/><path class="c85egjb-l"/><path class="ap9enlbhu"/></g>`,
		"fallback": "reicon:gem-sparkle",
	});
}

export default Component;
