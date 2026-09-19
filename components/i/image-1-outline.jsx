import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rgp0nubmz.css';
import '../../css/x/xyfvrf3td.css';
import '../../css/w/w6xr20wbw.css';
import '../../css/p/p9b3hul9p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rgp0nubmz"/><path class="xyfvrf3td"/><path class="w6xr20wbw"/><path class="p9b3hul9p"/></g>`,
		"fallback": "glyphs:image-1-outline",
	});
}

export default Component;
