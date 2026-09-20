import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv6-mibuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv6-mibuv"/>`,
		"fallback": "lucide:file-diff",
	});
}

export default Component;
