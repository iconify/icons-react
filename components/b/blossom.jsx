import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-4szbwhd.css';
import '../../css/x/x878rrbin.css';
import '../../css/h/hoyfu1b9w.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s7zo5sbdd.css';
import '../../css/w/wy5fk2b1m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-4szbwhd"/><path class="x878rrbin"/><path class="hoyfu1b9w"/><g class="jn8qy4bru"><circle class="s7zo5sbdd"/><path class="wy5fk2b1m"/></g>`,
		"fallback": "openmoji:blossom",
	});
}

export default Component;
