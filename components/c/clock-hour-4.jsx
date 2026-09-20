import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk3yj5b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk3yj5b7m"/>`,
		"fallback": "tabler:clock-hour-4",
	});
}

export default Component;
