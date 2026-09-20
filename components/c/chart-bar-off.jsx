import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqo1j5b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqo1j5b2n"/>`,
		"fallback": "tabler:chart-bar-off",
	});
}

export default Component;
