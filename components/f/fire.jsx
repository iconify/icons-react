import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xq37n2byd.css';
import '../../css/v/vg2lsqbky.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xq37n2byd"/><path class="vg2lsqbky"/></g>`,
		"fallback": "glyphs-poly:fire",
	});
}

export default Component;
