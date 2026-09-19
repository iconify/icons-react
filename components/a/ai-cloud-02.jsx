import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l00k7ibfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l00k7ibfq"/>`,
		"fallback": "hugeicons:ai-cloud-02",
	});
}

export default Component;
