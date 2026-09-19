import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpu81hs1j.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpu81hs1j"/>`,
		"fallback": "si-glyph:head-set",
	});
}

export default Component;
