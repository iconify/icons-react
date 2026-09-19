import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xf0iaj41n.css';
import '../../css/b/b51midcrf.css';
import '../../css/h/hq0wmibaf.css';
import '../../css/z/zbpqhxbim.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xf0iaj41n"/><path class="b51midcrf"/><path class="hq0wmibaf"/><path class="zbpqhxbim"/></g>`,
		"fallback": "glyphs-poly:arrows-round",
	});
}

export default Component;
