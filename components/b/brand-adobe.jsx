import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgzj3vsio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgzj3vsio"/>`,
		"fallback": "tabler:brand-adobe",
	});
}

export default Component;
