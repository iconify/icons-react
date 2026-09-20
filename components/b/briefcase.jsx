import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar3vc0bla.css';
import '../../css/u/u7oh6pfab.css';
import '../../css/m/mg0joeral.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/otio0yb-k.css';
import '../../css/i/ihhy2s8-o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar3vc0bla"/><path class="u7oh6pfab"/><path class="mg0joeral"/><g class="jn8qy4bru"><path class="otio0yb-k"/><path class="ihhy2s8-o"/></g>`,
		"fallback": "openmoji:briefcase",
	});
}

export default Component;
