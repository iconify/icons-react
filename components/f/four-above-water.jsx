import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz6h1pstq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz6h1pstq"/>`,
		"fallback": "pinhead:four-above-water",
	});
}

export default Component;
