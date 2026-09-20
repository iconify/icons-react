import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb89qzzmm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb89qzzmm"/>`,
		"fallback": "pajamas:flow-ai",
	});
}

export default Component;
