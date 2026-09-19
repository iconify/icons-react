import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gcicxwbvy.css';
import '../../css/o/opt7t5xjr.css';
import '../../css/x/x03iucczk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gcicxwbvy"/><path class="opt7t5xjr"/><path class="x03iucczk"/></g>`,
		"fallback": "covid:covid-carrier-packages",
	});
}

export default Component;
