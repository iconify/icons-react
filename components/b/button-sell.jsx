import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cstvsf11p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cstvsf11p"/>`,
		"fallback": "si-glyph:button-sell",
	});
}

export default Component;
