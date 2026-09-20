import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqxh4ky4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqxh4ky4s"/>`,
		"fallback": "tabler:aperture",
	});
}

export default Component;
