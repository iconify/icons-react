import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aezr_7ikx.css';
import '../../css/q/qmdx-0doa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aezr_7ikx"/><path class="qmdx-0doa"/></g>`,
		"fallback": "streamline-ultimate:instrument-tambourine",
	});
}

export default Component;
