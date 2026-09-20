import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw4s_ccdv.css';
import '../../css/a/afxn0v40s.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw4s_ccdv"/><path class="afxn0v40s"/>`,
		"fallback": "lineicons:angle-double-down",
	});
}

export default Component;
