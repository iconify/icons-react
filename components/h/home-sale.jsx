import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vrrhj9egb.css';
import '../../css/c/c8ypqbc8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vrrhj9egb"/><path class="c8ypqbc8z"/></g>`,
		"fallback": "iconoir:home-sale",
	});
}

export default Component;
