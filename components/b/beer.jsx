import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oco-8fb8g.css';
import '../../css/t/tk-rzp94k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oco-8fb8g"/><path class="tk-rzp94k"/>`,
		"fallback": "boxicons:beer",
	});
}

export default Component;
