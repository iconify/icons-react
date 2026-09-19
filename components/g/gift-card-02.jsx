import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sobe6ub7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sobe6ub7g"/>`,
		"fallback": "hugeicons:gift-card-02",
	});
}

export default Component;
