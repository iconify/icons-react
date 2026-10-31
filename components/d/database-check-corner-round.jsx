import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfnkwq3yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfnkwq3yg"/>`,
		"fallback": "coolicons:database-check-corner-round",
	});
}

export default Component;
