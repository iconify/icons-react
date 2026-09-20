import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpsiiab0r.css';
import '../../css/d/d7_180b7h.css';
import '../../css/w/wfgsbdqrb.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/snafz5gzs.css';
import '../../css/i/i6ch20b2k.css';
import '../../css/i/iy2yq0rld.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dpsiiab0r"><path class="d7_180b7h"/><path class="wfgsbdqrb"/></g><g class="jn8qy4bru"><path class="snafz5gzs"/><path class="i6ch20b2k"/><path class="iy2yq0rld"/></g>`,
		"fallback": "openmoji:black-cat",
	});
}

export default Component;
