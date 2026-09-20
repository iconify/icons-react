import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obfv3yb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obfv3yb1l"/>`,
		"fallback": "tabler:filter-minus",
	});
}

export default Component;
