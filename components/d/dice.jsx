import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r7sjkfbln.css';
import '../../css/o/o9f0ywb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r7sjkfbln"/><path class="o9f0ywb7r"/></g>`,
		"fallback": "streamline-ultimate:dice",
	});
}

export default Component;
