import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay5dj7y7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay5dj7y7n"/>`,
		"fallback": "keyline-icons:clock-10-sharp",
	});
}

export default Component;
