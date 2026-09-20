import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/e/e9sl8yd0l.css';
import '../../css/x/xnqyjoq2t.css';
import '../../css/u/u04539kyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="e9sl8yd0l"/><path class="xnqyjoq2t"/><path class="u04539kyu"/></g>`,
		"fallback": "lets-icons:desk-alt",
	});
}

export default Component;
