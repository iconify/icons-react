import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv73z5bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv73z5bfw"/>`,
		"fallback": "streamline-sharp:arrow-cursor-move",
	});
}

export default Component;
