import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oazsi7b1e.css';
import '../../css/g/gng03ob7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oazsi7b1e"/><path class="gng03ob7o"/></g>`,
		"fallback": "reicon:bookmark2",
	});
}

export default Component;
