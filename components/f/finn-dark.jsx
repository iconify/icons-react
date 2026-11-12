import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiwu_wund.css';
import '../../css/g/g714mx3oh.css';
import '../../css/i/iufs412sl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiwu_wund"/><path class="g714mx3oh"/><path class="iufs412sl"/>`,
		"fallback": "selfhst:finn-dark",
	});
}

export default Component;
