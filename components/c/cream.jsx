import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kormnebaz.css';
import '../../css/p/pixfiacte.css';
import '../../css/o/oda795b_c.css';
import '../../css/g/gd5oyhbtz.css';
import '../../css/f/fptu256yt.css';
import '../../css/h/hds49-bqk.css';
import '../../css/t/t8_cs4vzo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kormnebaz"/><path class="pixfiacte"/><path class="oda795b_c"/><path class="gd5oyhbtz"/><path class="fptu256yt"/><path class="hds49-bqk"/><path class="t8_cs4vzo"/>`,
		"fallback": "iconito:cream",
	});
}

export default Component;
