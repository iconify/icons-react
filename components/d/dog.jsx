import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liz3aeb_j.css';
import '../../css/j/jcu7q9shn.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/k/kl2m-1uyl.css';
import '../../css/r/r2c1aeq6w.css';
import '../../css/m/m243sxtoi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liz3aeb_j"/><path class="jcu7q9shn"/><g class="jn8qy4bru"><path class="kl2m-1uyl"/><path class="r2c1aeq6w"/><path class="m243sxtoi"/></g>`,
		"fallback": "openmoji:dog",
	});
}

export default Component;
