import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zivvlnbln.css';
import '../../css/w/wj8yjhxnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zivvlnbln"/><path class="wj8yjhxnh"/></g>`,
		"fallback": "tabler:cylinder-off",
	});
}

export default Component;
