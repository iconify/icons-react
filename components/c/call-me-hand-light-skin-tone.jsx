import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax7qsac9k.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/aa_s1yj3r.css';
import '../../css/v/vvjrpccfk.css';
import '../../css/e/e-5705h8e.css';
import '../../css/t/ttrb60jrl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax7qsac9k"/><g class="jn8qy4bru"><path class="aa_s1yj3r"/><path class="vvjrpccfk"/><path class="e-5705h8e"/><path class="ttrb60jrl"/></g>`,
		"fallback": "openmoji:call-me-hand-light-skin-tone",
	});
}

export default Component;
