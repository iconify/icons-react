import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsx0iobkq.css';
import '../../css/z/z_cctmbhw.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/h07ij6yks.css';
import '../../css/i/i6ch20b2k.css';
import '../../css/g/g-4j00rqa.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsx0iobkq"/><path class="z_cctmbhw"/><g class="jn8qy4bru"><path class="h07ij6yks"/><path class="i6ch20b2k"/><path class="g-4j00rqa"/></g>`,
		"fallback": "openmoji:cat",
	});
}

export default Component;
