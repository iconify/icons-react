import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7hbz4i7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7hbz4i7f"/>`,
		"fallback": "tabler:brand-cloudflare",
	});
}

export default Component;
