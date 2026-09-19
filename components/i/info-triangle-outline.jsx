import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afl8jx6mv.css';
import '../../css/u/u4xq7tb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afl8jx6mv"/><path clip-rule="evenodd" class="u4xq7tb1o"/>`,
		"fallback": "basil:info-triangle-outline",
	});
}

export default Component;
