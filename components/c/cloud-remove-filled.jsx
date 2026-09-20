import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/byqbv5bgj.css';
import '../../css/d/duaessuxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="byqbv5bgj"/><path class="duaessuxj"/></g>`,
		"fallback": "reicon:cloud-remove-filled",
	});
}

export default Component;
