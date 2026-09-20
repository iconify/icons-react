import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoyaqe29i.css';
import '../../css/b/bd7gnab7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoyaqe29i"/><path class="bd7gnab7w"/>`,
		"fallback": "selfhst:dope-security",
	});
}

export default Component;
