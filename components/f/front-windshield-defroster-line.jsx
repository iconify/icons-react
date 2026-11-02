import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_p2-wb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_p2-wb2t"/>`,
		"fallback": "mingcute:front-windshield-defroster-line",
	});
}

export default Component;
