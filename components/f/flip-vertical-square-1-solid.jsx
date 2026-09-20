import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv56qmxvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lv56qmxvo"/>`,
		"fallback": "streamline-sharp:flip-vertical-square-1-solid",
	});
}

export default Component;
