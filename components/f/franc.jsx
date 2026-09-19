import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/p/pb9ghc-7p.css';
import '../../css/v/vd00roi9p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="pb9ghc-7p"/><path class="vd00roi9p"/>`,
		"fallback": "formkit:franc",
	});
}

export default Component;
