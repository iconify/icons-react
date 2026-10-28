import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztw6jsdfu.css';
import '../../css/p/po93bzbuh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztw6jsdfu"/><path class="po93bzbuh"/>`,
		"fallback": "selfhst:fileflows-forge-dark",
	});
}

export default Component;
