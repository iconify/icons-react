import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bk04fhbuy.css';
import '../../css/a/a7xk9qw1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bk04fhbuy"/><path class="a7xk9qw1p"/></g>`,
		"fallback": "withicons:at-sign",
	});
}

export default Component;
