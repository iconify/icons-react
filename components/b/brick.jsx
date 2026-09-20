import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byvrfmb7t.css';
import '../../css/r/rw1w1gbsc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byvrfmb7t"/><path class="rw1w1gbsc"/>`,
		"fallback": "openmoji:brick",
	});
}

export default Component;
