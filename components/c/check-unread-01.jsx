import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo5-s_s3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo5-s_s3p"/>`,
		"fallback": "hugeicons:check-unread-01",
	});
}

export default Component;
