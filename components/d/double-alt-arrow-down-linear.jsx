import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zen1fdcpk.css';
import '../../css/a/ahhwqlski.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zen1fdcpk"/><path class="ahhwqlski"/></g>`,
		"fallback": "solar:double-alt-arrow-down-linear",
	});
}

export default Component;
