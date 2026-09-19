import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh_46raup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh_46raup"/>`,
		"fallback": "boxicons:blanket",
	});
}

export default Component;
