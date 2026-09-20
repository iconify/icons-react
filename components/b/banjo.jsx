import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4obtc3sj.css';
import '../../css/z/z17pz0rnr.css';
import '../../css/u/ul8tgpbeb.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n8nga19gm.css';
import '../../css/d/d081f5j8s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4obtc3sj"/><path class="z17pz0rnr"/><circle class="ul8tgpbeb"/><g class="jn8qy4bru"><path class="n8nga19gm"/><circle class="d081f5j8s"/></g>`,
		"fallback": "openmoji:banjo",
	});
}

export default Component;
