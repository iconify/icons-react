import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yd1zh49aw.css';
import '../../css/f/fk3mf7bqi.css';
import '../../css/r/ru_17e40o.css';
import '../../css/c/c04ryybwl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yd1zh49aw"/><path class="fk3mf7bqi"/><path class="ru_17e40o"/><path class="c04ryybwl"/></g>`,
		"fallback": "glyphs-poly:arrows-cross",
	});
}

export default Component;
