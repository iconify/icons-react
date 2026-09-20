import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1epb7bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1epb7bpa"/>`,
		"fallback": "tabler:brand-denodo",
	});
}

export default Component;
