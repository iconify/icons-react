import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfv3j0v9a.css';
import '../../css/h/hbhflsb1a.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfv3j0v9a"/><path class="hbhflsb1a"/>`,
		"fallback": "lineicons:cog",
	});
}

export default Component;
