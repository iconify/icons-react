import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-3f8hxqz.css';
import '../../css/c/cdssnbbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-3f8hxqz"/><path class="cdssnbbom"/>`,
		"fallback": "boxicons:bank",
	});
}

export default Component;
