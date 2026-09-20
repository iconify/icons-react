import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a66rwoh6p.css';
import '../../css/g/g3yeizbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a66rwoh6p"/><path class="g3yeizbsj"/>`,
		"fallback": "mingcute:discord-line",
	});
}

export default Component;
