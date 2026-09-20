import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnxwjfbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnxwjfbro"/>`,
		"fallback": "tabler:brand-kotlin",
	});
}

export default Component;
