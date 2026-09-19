import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd4oa2b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd4oa2b5j"/>`,
		"fallback": "bitcoin-icons:check-outline",
	});
}

export default Component;
