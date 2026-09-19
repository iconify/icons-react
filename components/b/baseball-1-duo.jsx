import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eum8pabgr.css';
import '../../css/t/tuua3db3n.css';
import '../../css/g/gng0j2b3j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eum8pabgr"/><path class="tuua3db3n"/><path class="gng0j2b3j"/></g>`,
		"fallback": "glyphs:baseball-1-duo",
	});
}

export default Component;
