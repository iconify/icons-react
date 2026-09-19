import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iitrv6b_u.css';
import '../../css/j/jeqnyebai.css';
import '../../css/p/pzp-sptxq.css';
import '../../css/r/r-n3tp3un.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="iitrv6b_u"><path class="jeqnyebai"/><path class="pzp-sptxq"/><path class="r-n3tp3un"/></g>`,
		"fallback": "catppuccin:cargo",
	});
}

export default Component;
