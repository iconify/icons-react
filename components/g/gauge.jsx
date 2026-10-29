import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok3x2mblu.css';
import '../../css/n/nzkawkbvm.css';
import '../../css/b/b0d7m1b7l.css';
import '../../css/h/hhi9yxy6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok3x2mblu wm-k"/><path class="nzkawkbvm wm-k"/><path class="b0d7m1b7l wm-k"/><path class="hhi9yxy6w wm-a"/>`,
		"fallback": "withicons-bauhaus:gauge",
	});
}

export default Component;
