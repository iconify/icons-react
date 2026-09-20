import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dytu10dqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dytu10dqt"/>`,
		"fallback": "tabler:battery-vertical-exclamation",
	});
}

export default Component;
