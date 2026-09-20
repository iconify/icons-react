import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piz_jmb7s.css';
import '../../css/z/zs8x37yqc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piz_jmb7s"/><path class="zs8x37yqc"/>`,
		"fallback": "octicon:chat-add-16",
	});
}

export default Component;
