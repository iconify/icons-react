import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a51bl-bho.css';
import '../../css/o/o0un9yhqx.css';
import '../../css/s/snq8qn9hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a51bl-bho"/><path class="o0un9yhqx"/><path class="snq8qn9hd"/>`,
		"fallback": "streamline-ultimate:accounting-bill-stack-1-bold",
	});
}

export default Component;
