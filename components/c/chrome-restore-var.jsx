import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m42whbbfs.css';
import '../../css/d/dsev7c1am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m42whbbfs"/><path class="dsev7c1am"/></g>`,
		"fallback": "proicons:chrome-restore-var",
	});
}

export default Component;
