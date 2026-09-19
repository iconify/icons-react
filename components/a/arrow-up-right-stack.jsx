import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b6b4acfbj.css';
import '../../css/w/w34_c4bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b6b4acfbj"/><path class="w34_c4bsb"/></g>`,
		"fallback": "hugeicons:arrow-up-right-stack",
	});
}

export default Component;
