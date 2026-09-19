import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3k7hac6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3k7hac6w"/>`,
		"fallback": "hugeicons:delete-02",
	});
}

export default Component;
