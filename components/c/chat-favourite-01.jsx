import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wd9-gzb5o.css';
import '../../css/j/jjp9eubkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wd9-gzb5o"/><path class="jjp9eubkh"/></g>`,
		"fallback": "hugeicons:chat-favourite-01",
	});
}

export default Component;
