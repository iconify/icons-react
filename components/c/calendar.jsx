import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxb6bgbsy.css';
import '../../css/t/tyb07sbbq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxb6bgbsy"/><path class="tyb07sbbq"/>`,
		"fallback": "ei:calendar",
	});
}

export default Component;
