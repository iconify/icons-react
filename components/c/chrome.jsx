import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kgv4gybam.css';
import '../../css/v/vb7n012lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kgv4gybam"/><path class="vb7n012lj"/></g>`,
		"fallback": "mynaui:chrome",
	});
}

export default Component;
