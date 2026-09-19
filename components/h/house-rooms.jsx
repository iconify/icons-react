import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dig8a7bjp.css';
import '../../css/s/s675a-bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dig8a7bjp"/><path class="s675a-bqe"/></g>`,
		"fallback": "iconoir:house-rooms",
	});
}

export default Component;
