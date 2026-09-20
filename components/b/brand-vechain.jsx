import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi2ed1bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi2ed1bcm"/>`,
		"fallback": "tabler:brand-vechain",
	});
}

export default Component;
