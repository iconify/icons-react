import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2u1i6b4l.css';
import '../../css/h/h_pt1abna.css';
import '../../css/m/ma684bb2g.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2u1i6b4l"/><path class="h_pt1abna"/><path class="ma684bb2g"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:aries",
	});
}

export default Component;
