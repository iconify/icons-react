import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuchegb-g.css';
import '../../css/i/izub48k_p.css';
import '../../css/q/qnwimlb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuchegb-g"/><path class="izub48k_p"/><path class="qnwimlb0g"/>`,
		"fallback": "boxicons:bear",
	});
}

export default Component;
