import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2hgrbbwz.css';
import '../../css/c/cnr4z9ptg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2hgrbbwz"/><path class="cnr4z9ptg"/>`,
		"fallback": "foundation:guide-dog",
	});
}

export default Component;
