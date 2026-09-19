import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yf677ub6l.css';
import '../../css/n/nvm48juhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yf677ub6l"/><path class="nvm48juhs"/></g>`,
		"fallback": "hugeicons:file-export",
	});
}

export default Component;
