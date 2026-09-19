import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2tp96bhu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2tp96bhu"/>`,
		"fallback": "famicons:game-controller",
	});
}

export default Component;
