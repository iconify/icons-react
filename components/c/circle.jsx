import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/re92cop1g.css';
import '../../css/b/bt1_89eei.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="re92cop1g"/><path class="bt1_89eei"/></g>`,
		"fallback": "glyphs-poly:circle",
	});
}

export default Component;
