import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yktm7h6-w.css';
import '../../css/o/oc2ujn7ja.css';
import '../../css/c/cx-cwhw8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yktm7h6-w"/><path class="oc2ujn7ja"/><path class="cx-cwhw8g"/>`,
		"fallback": "selfhst:fava",
	});
}

export default Component;
