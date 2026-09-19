import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko0dg5bwi.css';
import '../../css/d/d70zu1-xi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko0dg5bwi"/><path class="d70zu1-xi"/>`,
		"fallback": "famicons:cut-sharp",
	});
}

export default Component;
