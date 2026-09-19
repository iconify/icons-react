import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkuht6yxo.css';
import '../../css/z/zc9xvcccc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pkuht6yxo"/><path class="zc9xvcccc"/></g>`,
		"fallback": "glyphs-poly:arrow-round",
	});
}

export default Component;
