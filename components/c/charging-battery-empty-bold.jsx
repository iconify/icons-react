import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aovr4abks.css';
import '../../css/o/o8687p-5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aovr4abks"/><path class="o8687p-5i"/>`,
		"fallback": "streamline-ultimate:charging-battery-empty-bold",
	});
}

export default Component;
