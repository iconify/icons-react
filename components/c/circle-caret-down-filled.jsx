import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga72qv3aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga72qv3aw"/>`,
		"fallback": "tabler:circle-caret-down-filled",
	});
}

export default Component;
