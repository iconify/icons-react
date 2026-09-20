import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdtvrs_7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdtvrs_7d"/>`,
		"fallback": "stash:hash-duotone",
	});
}

export default Component;
