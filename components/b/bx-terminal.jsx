import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/matslfbya.css';
import '../../css/b/b1ecs5fbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="matslfbya"/><path class="b1ecs5fbx"/>`,
		"fallback": "bx:bx-terminal",
	});
}

export default Component;
