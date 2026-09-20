import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tirjqob-n.css';
import '../../css/x/x_x896bnj.css';
import '../../css/q/qlo39_9vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tirjqob-n"/><path class="x_x896bnj"/><path class="qlo39_9vq"/></g>`,
		"fallback": "mynaui:bell-user",
	});
}

export default Component;
