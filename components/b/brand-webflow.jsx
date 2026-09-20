import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zldpfoq5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zldpfoq5i"/>`,
		"fallback": "tabler:brand-webflow",
	});
}

export default Component;
