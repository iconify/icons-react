import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpy9h52dg.css';
import '../../css/b/b9rr1pb9p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hpy9h52dg"/><path class="b9rr1pb9p"/>`,
		"fallback": "streamline-block:basic-ui-hide",
	});
}

export default Component;
