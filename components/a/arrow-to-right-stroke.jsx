import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghv_czu6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghv_czu6v"/>`,
		"fallback": "boxicons:arrow-to-right-stroke",
	});
}

export default Component;
