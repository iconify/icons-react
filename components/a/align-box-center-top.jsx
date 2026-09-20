import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6f0o2r0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6f0o2r0l"/>`,
		"fallback": "tabler:align-box-center-top",
	});
}

export default Component;
