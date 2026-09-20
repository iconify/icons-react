import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obbl1ynnb.css';
import '../../css/j/jj_lj5bdm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obbl1ynnb"/><path class="jj_lj5bdm"/>`,
		"fallback": "selfhst:google-docs-light",
	});
}

export default Component;
