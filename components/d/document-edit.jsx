import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/llifecb5r.css';
import '../../css/k/k_sz5nb0n.css';
import '../../css/z/zh9gcsblg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="llifecb5r"/><path class="k_sz5nb0n"/><path class="zh9gcsblg"/></g>`,
		"fallback": "si-glyph:document-edit",
	});
}

export default Component;
