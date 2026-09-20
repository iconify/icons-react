import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si728y-uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si728y-uy"/>`,
		"fallback": "tabler:circle-caret-right-filled",
	});
}

export default Component;
