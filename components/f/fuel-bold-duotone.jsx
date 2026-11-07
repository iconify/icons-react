import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9kk-diig.css';
import '../../css/j/j7y39ibwz.css';
import '../../css/r/r7zem_bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9kk-diig"/><path class="j7y39ibwz"/><path class="r7zem_bnx"/>`,
		"fallback": "solar:fuel-bold-duotone",
	});
}

export default Component;
