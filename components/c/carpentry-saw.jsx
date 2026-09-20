import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrh0m3bvw.css';
import '../../css/t/tvd1ulb6u.css';
import '../../css/f/fh2prpbgh.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/d2159ck0g.css';
import '../../css/y/yt8yh8bmh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrh0m3bvw"/><path class="tvd1ulb6u"/><path class="fh2prpbgh"/><g class="jn8qy4bru"><path class="d2159ck0g"/><path class="yt8yh8bmh"/></g>`,
		"fallback": "openmoji:carpentry-saw",
	});
}

export default Component;
