import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j95h7gbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j95h7gbww"/>`,
		"fallback": "tabler:cell-signal-5",
	});
}

export default Component;
