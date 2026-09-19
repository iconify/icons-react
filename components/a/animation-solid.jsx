import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0izj7bsj.css';
import '../../css/p/p64c9l0on.css';
import '../../css/a/aexcjlr_h.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0izj7bsj"/><path class="p64c9l0on"/><path class="aexcjlr_h"/>`,
		"fallback": "clarity:animation-solid",
	});
}

export default Component;
