import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urn_w85ht.css';
import '../../css/l/ldest115k.css';
import '../../css/n/n_64_tbsm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urn_w85ht"/><path class="ldest115k"/><path class="n_64_tbsm"/>`,
		"fallback": "nimbus:duplicate",
	});
}

export default Component;
