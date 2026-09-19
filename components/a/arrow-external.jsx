import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/at-f_4bqo.css';
import '../../css/j/j7p-t2quf.css';
import '../../css/f/fvo3uwbbz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="at-f_4bqo"/><path class="j7p-t2quf"/><path class="fvo3uwbbz"/></g>`,
		"fallback": "glyphs-poly:arrow-external",
	});
}

export default Component;
