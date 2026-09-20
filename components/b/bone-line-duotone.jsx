import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zej5m-rko.css';
import '../../css/f/fhy1mvfif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zej5m-rko"/><path class="fhy1mvfif"/></g>`,
		"fallback": "solar:bone-line-duotone",
	});
}

export default Component;
