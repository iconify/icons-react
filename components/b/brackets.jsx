import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahkce2-8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahkce2-8d"/>`,
		"fallback": "proicons:brackets",
	});
}

export default Component;
