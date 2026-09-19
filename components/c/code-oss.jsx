import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxecaccxz.css';
import '../../css/y/ypa21kbxi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxecaccxz"/><path class="ypa21kbxi"/></g>`,
		"fallback": "codicon:code-oss",
	});
}

export default Component;
