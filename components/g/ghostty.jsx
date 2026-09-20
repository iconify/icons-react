import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2bh21bwx.css';
import '../../css/b/bsv5quojw.css';
import '../../css/d/dqw2i7ccb.css';
import '../../css/m/mdfze3b9z.css';

const viewBox = {"width":27,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y2bh21bwx"/><path class="bsv5quojw"/><path class="dqw2i7ccb"/><path class="mdfze3b9z"/></g>`,
		"fallback": "thesvg-color:ghostty",
	});
}

export default Component;
