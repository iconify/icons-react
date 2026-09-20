import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7ml1bbhq.css';
import '../../css/k/k08isbc9y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7ml1bbhq"/><path class="k08isbc9y"/>`,
		"fallback": "selfhst:cobalt",
	});
}

export default Component;
