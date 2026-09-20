import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi-q769oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi-q769oq"/>`,
		"fallback": "tabler:brand-audible",
	});
}

export default Component;
