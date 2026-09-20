import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/adxgjgbmf.css';
import '../../css/a/a6h5-u22e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="adxgjgbmf"/><path class="a6h5-u22e"/></g>`,
		"fallback": "mynaui:binoculars",
	});
}

export default Component;
