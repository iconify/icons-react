import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv63tfbxq.css';
import '../../css/f/fi_q4_r5k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv63tfbxq"/><path class="fi_q4_r5k"/>`,
		"fallback": "carbon:flow-logs-vpc",
	});
}

export default Component;
