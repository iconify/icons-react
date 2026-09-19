import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uwtaq622d.css';
import '../../css/d/dasaudbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uwtaq622d"/><path class="dasaudbfd"/></g>`,
		"fallback": "hugeicons:file-audio",
	});
}

export default Component;
