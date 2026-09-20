import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj-xz-1-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj-xz-1-y"/>`,
		"fallback": "simple-icons:fastapi",
	});
}

export default Component;
