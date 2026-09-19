import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eg38gebaa.css';
import '../../css/s/spv1s3wtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eg38gebaa"/><path class="spv1s3wtx"/></g>`,
		"fallback": "hugeicons:cursor-loading-01",
	});
}

export default Component;
