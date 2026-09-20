import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znde4_osf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znde4_osf"/>`,
		"fallback": "tabler:badge",
	});
}

export default Component;
