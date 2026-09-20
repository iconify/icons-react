import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i68s3xu0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i68s3xu0u"/>`,
		"fallback": "tabler:device-imac-x",
	});
}

export default Component;
