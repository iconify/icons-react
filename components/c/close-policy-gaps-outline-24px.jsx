import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvv7_nbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mvv7_nbuq"/>`,
		"fallback": "healthicons:close-policy-gaps-outline-24px",
	});
}

export default Component;
