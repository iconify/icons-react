import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_8s107tv.css';
import '../../css/e/e8df_acjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_8s107tv"/><path class="e8df_acjv"/>`,
		"fallback": "selfhst:docs-collaboration",
	});
}

export default Component;
