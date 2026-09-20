import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8lahybab.css';
import '../../css/e/e2jwv47us.css';
import '../../css/l/lh-x29b-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8lahybab"/><path class="e2jwv47us"/><path class="lh-x29b-l"/>`,
		"fallback": "selfhst:caprover",
	});
}

export default Component;
