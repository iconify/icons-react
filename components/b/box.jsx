import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uny__sbhr.css';
import '../../css/p/pnbf9ojft.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uny__sbhr"/><path class="pnbf9ojft"/></g>`,
		"fallback": "glyphs-poly:box",
	});
}

export default Component;
