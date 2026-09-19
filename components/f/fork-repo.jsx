import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k327wib4f.css';
import '../../css/t/t6tpgmbdb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k327wib4f"/><path class="t6tpgmbdb"/>`,
		"fallback": "ion:fork-repo",
	});
}

export default Component;
