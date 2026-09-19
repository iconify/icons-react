import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/v/v90gbqbox.css';
import '../../css/b/b1667kbkd.css';
import '../../css/r/rk36--czk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><circle class="v90gbqbox"/><path class="b1667kbkd"/><path class="rk36--czk"/></g>`,
		"fallback": "hugeicons:chip-02",
	});
}

export default Component;
