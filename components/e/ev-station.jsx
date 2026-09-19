import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z74of7s3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z74of7s3c"/>`,
		"fallback": "bxs:ev-station",
	});
}

export default Component;
