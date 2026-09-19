import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2nvl-0be.css';
import '../../css/l/lt7jyeb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2nvl-0be"/><path class="lt7jyeb_d"/>`,
		"fallback": "boxicons:bacteria",
	});
}

export default Component;
