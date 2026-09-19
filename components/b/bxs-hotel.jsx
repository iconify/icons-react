import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djv6i7b0m.css';
import '../../css/j/jf_6np9ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="djv6i7b0m"/><path class="jf_6np9ji"/>`,
		"fallback": "bx:bxs-hotel",
	});
}

export default Component;
