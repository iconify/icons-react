import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrxgkc0xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrxgkc0xm"/>`,
		"fallback": "tabler:circle-dashed-letter-g",
	});
}

export default Component;
