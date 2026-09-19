import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-j_xfees.css';
import '../../css/s/s-45tkb7i.css';
import '../../css/k/ko4cnabae.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s-j_xfees"/><path class="s-45tkb7i"/><path class="ko4cnabae"/></g>`,
		"fallback": "bi:clipboard-heart",
	});
}

export default Component;
