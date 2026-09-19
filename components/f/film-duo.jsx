import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ks9jwac0j.css';
import '../../css/b/b90rs7bgy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ks9jwac0j"/><path class="b90rs7bgy"/></g>`,
		"fallback": "glyphs:film-duo",
	});
}

export default Component;
