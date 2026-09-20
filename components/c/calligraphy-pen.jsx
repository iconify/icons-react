import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1wjdnb8r.css';
import '../../css/i/ihvrn6bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g1wjdnb8r"/><circle class="ihvrn6bjl"/></g>`,
		"fallback": "proicons:calligraphy-pen",
	});
}

export default Component;
