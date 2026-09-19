import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzfunhbuj.css';
import '../../css/i/i1hn7158g.css';
import '../../css/s/s-5bh34nf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dzfunhbuj"/><path class="i1hn7158g"/><path class="s-5bh34nf"/></g>`,
		"fallback": "glyphs-poly:clock",
	});
}

export default Component;
