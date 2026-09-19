import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqoppnb6n.css';
import '../../css/c/cv9731b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqoppnb6n"/><path class="cv9731b4o"/>`,
		"fallback": "boxicons:brightness-half",
	});
}

export default Component;
