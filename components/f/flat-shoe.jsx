import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1o5qtg5r.css';
import '../../css/c/c2jggvbqv.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s1f6v5brf.css';
import '../../css/c/cvl8pkduj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1o5qtg5r"/><path class="c2jggvbqv"/><g class="jn8qy4bru"><path class="s1f6v5brf"/><path class="cvl8pkduj"/></g>`,
		"fallback": "openmoji:flat-shoe",
	});
}

export default Component;
