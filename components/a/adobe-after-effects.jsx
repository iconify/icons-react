import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tllrkkbnh.css';
import '../../css/i/id8dgub2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tllrkkbnh"/><path class="id8dgub2d"/></g>`,
		"fallback": "iconoir:adobe-after-effects",
	});
}

export default Component;
