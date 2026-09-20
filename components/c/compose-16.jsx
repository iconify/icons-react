import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k92ore-6n.css';
import '../../css/c/cr42b6bnq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k92ore-6n"/><path class="cr42b6bnq"/>`,
		"fallback": "octicon:compose-16",
	});
}

export default Component;
