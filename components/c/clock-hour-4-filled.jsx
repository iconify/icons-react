import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oijg6cc3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oijg6cc3m"/>`,
		"fallback": "tabler:clock-hour-4-filled",
	});
}

export default Component;
