import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb5b0n5vc.css';
import '../../css/b/bcvzlnbri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb5b0n5vc"/><path class="bcvzlnbri"/>`,
		"fallback": "selfhst:freshrss",
	});
}

export default Component;
