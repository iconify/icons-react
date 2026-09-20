import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_b2hwbyf.css';
import '../../css/o/oj5wobigx.css';
import '../../css/r/r5bozrdyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_b2hwbyf"/><path class="oj5wobigx"/><path class="r5bozrdyc"/>`,
		"fallback": "uim:hospital",
	});
}

export default Component;
