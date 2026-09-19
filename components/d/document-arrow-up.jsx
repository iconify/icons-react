import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zeznnhb5f.css';
import '../../css/p/p5eh8xbiq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zeznnhb5f"/><path class="p5eh8xbiq"/></g>`,
		"fallback": "si-glyph:document-arrow-up",
	});
}

export default Component;
