import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvrc9db1w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvrc9db1w"/>`,
		"fallback": "lsicon:file-avi-outline",
	});
}

export default Component;
