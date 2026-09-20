import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3jglccvf.css';
import '../../css/c/cuikm_bqp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3jglccvf"/><path class="cuikm_bqp"/>`,
		"fallback": "openmoji:arrow-turn-right",
	});
}

export default Component;
