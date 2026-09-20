import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goa68fb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goa68fb9d"/>`,
		"fallback": "tabler:brand-framer",
	});
}

export default Component;
