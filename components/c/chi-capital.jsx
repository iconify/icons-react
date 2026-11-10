import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/r6ept0bwt.css';
import '../../css/j/jfh6c_bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="r6ept0bwt"/><path class="jfh6c_bwl"/></g>`,
		"fallback": "matita:chi-capital",
	});
}

export default Component;
