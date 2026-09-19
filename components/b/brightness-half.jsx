import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvt8a1byh.css';
import '../../css/q/qfpw5-bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvt8a1byh"/><path class="qfpw5-bub"/>`,
		"fallback": "bx:brightness-half",
	});
}

export default Component;
