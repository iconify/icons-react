import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv3pdsh-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv3pdsh-c"/>`,
		"fallback": "tabler:arrow-guide-filled",
	});
}

export default Component;
