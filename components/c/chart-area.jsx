import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ttdtw9bcz.css';
import '../../css/z/zq2yh0ibb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ttdtw9bcz"/><path class="zq2yh0ibb"/></g>`,
		"fallback": "vadivam:chart-area",
	});
}

export default Component;
