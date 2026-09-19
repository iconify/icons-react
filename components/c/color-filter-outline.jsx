import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibmndspam.css';
import '../../css/n/nb7pxabat.css';
import '../../css/d/dwcqehbef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ibmndspam"/><circle class="nb7pxabat"/><circle class="dwcqehbef"/>`,
		"fallback": "ion:color-filter-outline",
	});
}

export default Component;
