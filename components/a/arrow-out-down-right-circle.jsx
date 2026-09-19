import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-gja2bhg.css';
import '../../css/v/vnep0m7rs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-gja2bhg"/><path class="vnep0m7rs"/>`,
		"fallback": "boxicons:arrow-out-down-right-circle",
	});
}

export default Component;
