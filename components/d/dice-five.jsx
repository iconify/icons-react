import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn-sj6b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn-sj6b7o"/>`,
		"fallback": "mynaui:dice-five",
	});
}

export default Component;
