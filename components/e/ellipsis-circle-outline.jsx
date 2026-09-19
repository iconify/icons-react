import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nw14a-bbp.css';
import '../../css/e/e6qicfbfp.css';
import '../../css/s/syvz2ggnb.css';
import '../../css/k/kz0_pvboy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nw14a-bbp"/><path class="e6qicfbfp"/><path class="syvz2ggnb"/><path class="kz0_pvboy"/></g>`,
		"fallback": "glyphs:ellipsis-circle-outline",
	});
}

export default Component;
