import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nce_cccod.css';
import '../../css/k/khwun-byq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nce_cccod"/><path class="khwun-byq"/>`,
		"fallback": "carbon:database-messaging",
	});
}

export default Component;
