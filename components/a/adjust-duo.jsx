import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b90b8empi.css';
import '../../css/t/tk9ymfj2p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b90b8empi"/><path class="tk9ymfj2p"/></g>`,
		"fallback": "glyphs:adjust-duo",
	});
}

export default Component;
