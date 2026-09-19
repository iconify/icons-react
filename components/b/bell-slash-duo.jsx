import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1v0o7p4n.css';
import '../../css/s/s6n-b1uit.css';
import '../../css/y/ysgw9dbgp.css';
import '../../css/q/qu8h5d4df.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y1v0o7p4n"/><path class="s6n-b1uit"/><path class="ysgw9dbgp"/><path class="qu8h5d4df"/></g>`,
		"fallback": "glyphs:bell-slash-duo",
	});
}

export default Component;
